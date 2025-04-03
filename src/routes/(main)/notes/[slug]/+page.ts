import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const post = await import(`../../../../notes/${params.slug}.md`);
        const title = params.slug.split('_').join(' ').toLowerCase();
        return {
            content: post.default,
            meta: post.metadata,
            title,
        };
    } catch (e) {
        error(404, `Not found: ${params.slug}`);
    }
}
