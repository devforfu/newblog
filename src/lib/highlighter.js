import {getSingletonHighlighter} from "shiki";

export const THEMES = ['github-light-default', 'github-dark-dimmed'];
export const LANGS = ['javascript', 'typescript', 'rust', 'python', 'json', 'bash', 'toml'];

export async function highlightCode(code, lang = 'text') {
    const options = { themes: THEMES, langs: LANGS };
    const h = await getSingletonHighlighter(options);
    await h.loadLanguage(...LANGS);
    return {
        light: h.codeToHtml(code, {lang, theme: THEMES[0]}),
        dark: h.codeToHtml(code, {lang, theme: THEMES[1]}),
    };
}
