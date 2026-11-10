import Script from "next/script";

// Google Tag Manager container. Google Analytics (GA4) is configured inside
// this container, not in code: add the GA4 tag in tagmanager.google.com.
export const GTM_ID = "GTM-TB33RXTW";

/**
 * Loads GTM the same way as the snippet from Google, but through next/script
 * so it is not blocked by hydration. The <noscript> iframe covers visitors
 * with JavaScript disabled. Render this as the first child of <body>.
 */
export default function GoogleTagManager() {
  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
      <Script
        id="gtm-loader"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
