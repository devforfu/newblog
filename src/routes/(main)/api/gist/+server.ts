import { json } from '@sveltejs/kit';
import { Octokit } from 'octokit';
import { GH_TOKEN } from '$env/static/private';

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    if (!id) return json({error: 'cannot fetch gist ID'}, { status: 400 });
    try {
        const api = new Octokit({ auth: GH_TOKEN });
        const response = await api.rest.gists.get({ gist_id: id });
        const files = response.data.files;
        // @ts-ignore
        const firstFile = Object.values(files)[0];
        if (!firstFile) return json({error: 'no files in gist'}, { status: 404 });
        return json(firstFile);
    } catch (error) {
        return json({ error: 'cannot fetch gist' }, { status: 404 });
    }
}