<script lang="ts">
    import PostItem from '$lib/components/PostItem.svelte';
    import type {Post} from "$lib/types";
    let { posts, slugPrefix = "" }: { posts: Post[], slugPrefix: string } = $props();
</script>
<section>
    <ul class="posts">
        {#each posts as post}
            <PostItem {post} {slugPrefix} />
        {/each}
    </ul>
</section>
