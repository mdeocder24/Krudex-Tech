/**
 * Renders schema.org structured data. `<` is escaped so no string in the
 * payload can close the script tag (see Next.js JSON-LD guide).
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
