/** Run Prism on each fenced `code.language-*` inside a container (CDN Prism API). */
export function runPrismHighlight(container) {
  if (typeof window === 'undefined' || !container?.querySelectorAll) return;
  const { Prism } = window;
  if (!Prism?.highlightElement) return;
  container.querySelectorAll('code[class*="language-"]').forEach((node) => {
    try {
      Prism.highlightElement(node);
    } catch {
      /* missing grammar or Prism edge case */
    }
  });
}
