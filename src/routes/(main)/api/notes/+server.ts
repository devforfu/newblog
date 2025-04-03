import {json} from "@sveltejs/kit";

export async function GET() {
    const notes = import.meta.glob('/src/notes/*.md', { eager: true });
    const slugs = Object.keys(notes).map(key => key.split('/').at(-1)!.replace('.md', ''));
    const names = slugs.map(slug => slug.replace(/_/g, ' ').toLowerCase());
    return json({ slugs, names });
}