import { json } from '@sveltejs/kit';
import {getPosts, PostsGroup} from "$lib/utils";

export async function GET() {
  const posts = await getPosts(PostsGroup.Published);
  return json(posts);
}
