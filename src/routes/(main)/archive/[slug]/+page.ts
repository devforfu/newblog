import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const post = await import(`../../../../posts/archive/${params.slug}.md`);
        return {
            content: post.default,
            meta: post.metadata,
        };
    } catch (e) {
        error(404, `Not found: ${params.slug}`);
    }
}
