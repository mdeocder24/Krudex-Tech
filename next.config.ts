import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Static CSP (no nonces) so pages stay statically rendered.
// - challenges.cloudflare.com: Turnstile widget on /contact
// - cdn.jsdelivr.net: font files troika-three-text (drei <Text>) fetches for the 3D hero
// - blob: workers + 'unsafe-eval': troika builds its text-layout worker from a
//   Blob URL and rebuilds its functions from strings inside it; blob workers
//   inherit this CSP. Drop 'unsafe-eval' if drei <Text> leaves Hero3DObject.
// While the policy is Report-Only, frame-ancestors and upgrade-insecure-requests
// have no effect; X-Frame-Options below still blocks framing.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data: https://cdn.jsdelivr.net",
  "connect-src 'self' https://cdn.jsdelivr.net https://challenges.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.google-analytics.com",
  "worker-src 'self' blob:",
  "frame-src https://challenges.cloudflare.com https://www.googletagmanager.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  // Report-Only for now: when enforced, something inside troika's text worker
  // (drei <Text> in Hero3DObject) is blocked and the 3D hero renders empty.
  // Violations from the worker don't reach page listeners. Switch the key to
  // "Content-Security-Policy" once the hero renders under enforcement.
  { key: "Content-Security-Policy-Report-Only", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // The Work page was removed; send old links and search results home.
      { source: "/work", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
