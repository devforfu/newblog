<script lang="ts">
  import * as config from '$lib/config';
  import PostsList from '$lib/components/PostsList.svelte';
  let { data } = $props();
</script>
<svelte:head>
  <title>{config.title}</title>
</svelte:head>
<PostsList posts={data.posts} />
