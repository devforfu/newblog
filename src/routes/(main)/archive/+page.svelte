<script lang="ts">
    import * as config from '$lib/config';
    import PostsList from '../posts_list.svelte';
    let { data } = $props();
</script>
<svelte:head>
    <title>{config.title}</title>
</svelte:head>
<PostsList posts={data.posts} slugPrefix="archive"/>
