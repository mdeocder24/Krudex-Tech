import type { Instrumentation } from 'next';

/**
 * Logs every server-side request error as one structured JSON line, so the
 * host's log search can find them. To forward to an error tracker (Sentry,
 * Better Stack, etc.), send the same payload from here.
 */
export const onRequestError: Instrumentation.onRequestError = async (err, request, context) => {
  const error = err instanceof Error ? err : new Error(String(err));
  const digest =
    typeof err === 'object' && err !== null && 'digest' in err ? String((err as { digest: unknown }).digest) : undefined;

  console.error(
    JSON.stringify({
      level: 'error',
      source: 'onRequestError',
      message: error.message,
      digest,
      stack: error.stack?.split('\n').slice(0, 8).join('\n'),
      method: request.method,
      path: request.path,
      routerKind: context.routerKind,
      routePath: context.routePath,
      routeType: context.routeType,
      time: new Date().toISOString(),
    })
  );
};
