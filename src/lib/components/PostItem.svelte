<script lang="ts">
    import type { Post } from '$lib/types';
    import { formatDate } from "$lib/utils";

    let { post, slugPrefix = "" }: { post: Post, slugPrefix: string } = $props();
    const externalPost = post.foreign_url !== undefined;
    const postLink = externalPost
        ? post.foreign_url
        : slugPrefix ? `${slugPrefix}/${post.slug}` : post.slug;
    const postDate = formatDate(post.date);
</script>

<li class="post">
    <a href={postLink}
       class="post-title"
       target={externalPost ? "_blank" : "_self"}
       rel={externalPost ? "noopener noreferrer" : ""}
    >
        {post.title}
        {#if externalPost}
            <span class="external-icon" data-tooltip="Opens in a new tab">↗</span>
        {/if}
    </a>
    <div class="meta">
        <span class="date">{postDate}</span>
        {#if post.description}
            <span class="separator">•</span>
            <span class="description">{post.description}</span>
        {/if}
    </div>
</li>

<style>
    .post {
        display: flex;
        flex-direction: column;
        padding: 12px 0;
        border-bottom: 1px solid var(--input-border);

        .post-title {
            font-size: 1.3rem;
            font-weight: bold;
            text-decoration: none;
            color: var(--theme-text);
            transition: color 0.2s ease-in-out;

            .external-icon {
                font-size: 0.85rem;
                color: var(--theme-primary);
                display: inline-flex;
                align-items: center;
                position: relative;
                cursor: pointer;
            }

            .external-icon::after {
                content: attr(data-tooltip);
                position: absolute;
                bottom: 130%;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.75rem;
                background-color: var(--theme-surface);
                color: var(--theme-text);
                border: 1px solid var(--input-border);
                padding: 4px 8px;
                border-radius: 4px;
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.2s ease-in-out;
                pointer-events: none;
            }

            .external-icon:hover::after {
                opacity: 1;
            }
        }

        .post-title:hover {
            color: var(--theme-primary);
        }

        .meta {
            display: flex;
            align-items: center;
            font-size: 0.9rem;
            color: var(--theme-text-secondary);
            gap: 8px;

            .date {
                font-family: monospace;
                text-transform: uppercase;
                font-size: 0.85rem;
                color: var(--theme-text-muted);
            }

            .separator {
                color: var(--theme-text-muted);
            }

            .description {
                font-size: 0.9rem;
                color: var(--theme-text-secondary);
            }
        }
    }
</style>
