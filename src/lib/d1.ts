interface D1QueryMeta {
  changed_db?: boolean;
  changes?: number;
  duration?: number;
  last_row_id?: number;
  rows_read?: number;
  rows_written?: number;
  size_after?: number;
}

interface D1QueryResult<T = unknown> {
  results: T[];
  success: boolean;
  meta: D1QueryMeta;
}

interface D1ApiResponse<T = unknown> {
  result: D1QueryResult<T>[];
  success: boolean;
  errors: Array<{ code: number; message: string }>;
  messages: string[];
}

/**
 * Execute SQL queries against Cloudflare D1 using Cloudflare's secure REST API.
 * This runs securely on the server-side (Next.js Route Handlers / Server Actions).
 * 
 * @param sql Parameterized SQL statement (e.g., "INSERT INTO inquiries (...) VALUES (?, ?)")
 * @param params Array of parameters to bind to the statement
 */
export async function queryD1<T = unknown>(
  sql: string,
  params: unknown[] = []
): Promise<{ results: T[]; meta: D1QueryMeta }> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
  const apiToken = process.env.CLOUDFLARE_D1_API_TOKEN;

  if (!accountId || !databaseId || !apiToken) {
    throw new Error(
      'Missing Cloudflare D1 configuration. Ensure CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_D1_DATABASE_ID, and CLOUDFLARE_D1_API_TOKEN are set in your environment variables.'
    );
  }

  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sql,
      params,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Cloudflare D1 HTTP Error (${response.status}): ${errorText}`);
  }

  const data: D1ApiResponse<T> = await response.json();

  if (!data.success || data.errors?.length > 0) {
    const errorMsg = data.errors?.map((e) => e.message).join('; ') || 'D1 query execution failed';
    throw new Error(`Cloudflare D1 Error: ${errorMsg}`);
  }

  const queryResult = data.result?.[0];

  return {
    results: queryResult?.results || [],
    meta: queryResult?.meta || {},
  };
}
