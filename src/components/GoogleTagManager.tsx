// Google tag for GTM container GTM-TB33RXTW. Google asks for it immediately
// after <head>, and only once per page. GA4 is configured inside the GTM
// container (tagmanager.google.com), not in code.
export const GTM_ID = "GTM-TB33RXTW";

/** Place as the first children of <head> in the root layout. */
export function GoogleTagHead() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
        }}
      />
    </>
  );
}

/** Place as the first child of <body>, for visitors with JavaScript disabled. */
export function GoogleTagNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
