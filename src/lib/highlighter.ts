import {createHighlighter, type HighlighterGeneric} from 'shiki';

let highlighter: HighlighterGeneric<any, any> | undefined;

const theme = 'github-light';

export async function getHighlighter() {
    if (highlighter === undefined) {
        const h = await createHighlighter({
            themes: [theme],
            langs: ['javascript', 'typescript', 'bash', 'rust', 'python', 'json', 'toml'],
        });
        await h.loadLanguage('javascript', 'typescript', 'bash', 'rust', 'python', 'json', 'toml');
        highlighter = h;
    }
    return highlighter;
}

export async function highlightCode(code: string, lang: string) {
    return (await getHighlighter()).codeToHtml(code, { lang, theme });
}
