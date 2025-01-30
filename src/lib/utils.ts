import type { Post } from "$lib/types";

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(
  date: string,
  locales = 'en'
) {
  // Safari is mad about dashes in the date
  const dateToFormat = new Date(date.replaceAll('-', '/'));
  return dateToFormat.toLocaleDateString(locales, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

export enum PostsGroup {
  Hidden = 0,
  Published = 1 << 0,
  Archived = 1 << 1,
  All = ~(~0 << 3)
}

export async function getPosts(kind: PostsGroup) {
  let groups: Record<string, unknown>[] = [];

  if ((kind & PostsGroup.Published) === PostsGroup.Published) {
    console.log('getting published posts');
    groups.push(import.meta.glob('/src/posts/*.md', { eager: true }));
  }

  if ((kind & PostsGroup.Archived) === PostsGroup.Archived) {
    console.log('getting archived posts');
    groups.push(import.meta.glob('/src/posts/archive/*.md', { eager: true }));
  }

  let posts: Post[] = [];

  for (const group of groups) {
    for (const path in group) {
      console.log(path);

      const file = group[path];
      const slug = path.split('/').at(-1)?.replace('.md', '');

      if (file && typeof file === 'object' && 'metadata' in file && slug) {
        const metadata = file.metadata as Omit<Post, 'slug'>;
        const post = {...metadata, slug} satisfies Post;
        if (post.published || (kind === PostsGroup.All)) posts.push(post);
      }
    }
  }

  posts = posts.sort(
      (first, second) =>
          new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  return posts;
}