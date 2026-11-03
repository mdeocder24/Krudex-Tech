/** Shared by the server layout (inline script) and the client theme hook. */
export const THEME_STORAGE_KEY = 'krudex-theme';

/**
 * Runs inline in <head> before the page paints: a saved choice wins,
 * otherwise the OS preference. Static string, no user input.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;
