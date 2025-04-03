<script lang="ts">
    import type { Post } from '$lib/types';
    import { formatDate } from "$lib/utils";
    import Escape from "$lib/components/Escape.svelte";

    let { post, slugPrefix = "" }: { post: Post, slugPrefix: string } = $props();
    const externalPost = post.foreign_url !== undefined;
    const postLink = externalPost
        ? post.foreign_url
        : slugPrefix ? `${slugPrefix}/${post.slug}` : post.slug;
    const postDate = formatDate(post.date);
</script>

<div class="post">
    <a href={postLink}
       class="post-title"
       target={externalPost ? "_blank" : "_self"}
       rel={externalPost ? "noopener noreferrer" : ""}
    >
        {post.title}
        {#if externalPost}<Escape />{/if}
    </a>
    <div class="meta">
        <span class="date">{postDate}</span>
        {#if post.tags && post.tags.length > 0}
            <div class="categories">
                {#each post.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        {/if}
    </div>
    {#if post.description}
        <div class="description">{post.description}</div>
    {/if}
</div>

<style>
    .post {
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 0.5rem;
        transition: transform 0.2s ease-in-out;
    }

    .post:hover {
        transform: translateY(-0.25rem);
        box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
    }

    .post-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #000;
        text-decoration: none;
        display: block;
        margin-bottom: 0.5rem;
        transition: color 0.2s ease-in-out;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .post-title:hover {
        color: #0070f3;
    }

    .date {
        font-family: var(--font-monospace-code), monospace;
        font-size: 0.8rem;
        color: #666;
        margin-right: 0.5rem;
        white-space: nowrap;
    }

    .categories {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        gap: 0.5rem;

        .tag {
            font-family: var(--font-monospace-code), monospace;
            font-size: 0.8rem;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            background-color: #eee;
        }
    }
</style>
