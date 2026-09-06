export function chapterHeader(num: string, label: string, titleHtml: string): string {
  return `
    <header class="chapter" data-reveal>
      <p class="label chapter__label"><span class="chapter__num">${num}</span> ${label}</p>
      <h2 class="display chapter__title">${titleHtml}</h2>
    </header>`;
}
