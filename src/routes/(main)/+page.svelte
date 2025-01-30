<script lang="ts">
  import * as config from '$lib/config';
  import PostsList from './posts_list.svelte';
  let { data } = $props();
</script>
<svelte:head>
  <title>{config.title}</title>
</svelte:head>
<PostsList posts={data.posts} />
<section>
  <p>Old posts are found in the <a href="/archive">archive</a>.</p>
</section>
