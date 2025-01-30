export type Category = 'sveltekit' | 'svelte';

export type Tag = 'python' | 'rust' | 'cpp' | 'c';

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Category[];
  tags: Tag[];
  published: boolean;
  archived: boolean;
  foreign_url: string | undefined;
};
