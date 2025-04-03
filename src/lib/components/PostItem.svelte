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
        border: none;
        padding: 1.25rem;
        transition: all 0.3s ease;
        background-color: white;
        position: relative;
    }

    .post:hover {
        transform: translateY(-0.25rem);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        z-index: 1;
    }
    
    .post:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #e4eeff, #1a1a2e);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .post:hover:before {
        opacity: 1;
    }

    .post-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #1a1a2e;
        text-decoration: none;
        display: block;
        margin-bottom: 0.75rem;
        transition: color 0.2s ease-in-out;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 1.4;
    }

    .post-title:hover {
        color: #4263eb;
    }

    .meta {
        display: flex;
        flex-direction: column;
    }

    .date {
        font-family: var(--font-monospace-code), monospace;
        font-size: 0.9rem;
        color: #666;
        margin-right: 0.5rem;
        white-space: nowrap;
    }

    .description {
        margin-top: 0.75rem;
        font-size: 1rem;
        color: #4a4a4a;
        line-height: 1.5;
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
            font-size: 0.85rem;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            background-color: #e4eeff;
            color: #0f3460;
            transition: all 0.2s ease;
        }
        
        .tag:hover {
            background-color: #4263eb;
            color: white;
        }
    }
</style>
