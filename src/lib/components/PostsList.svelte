<script lang="ts">
    import PostItem from '$lib/components/PostItem.svelte';
    import type {Post} from "$lib/types";
    let { posts, slugPrefix = "" }: { posts: Post[], slugPrefix: string } = $props();
</script>
<section>
    <div class="posts">
        {#each posts as post}
            <PostItem {post} {slugPrefix} />
        {/each}
    </div>
</section>
<style>
    .posts {
        padding-top: 1rem;
        margin: 1.5rem auto;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        max-width: 1000px;
    }
</style>
