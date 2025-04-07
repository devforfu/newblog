<script lang="ts">
    import { formatDate } from '$lib/utils';
    let { data } = $props();
</script>
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>
<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p>{formatDate(data.meta.date)}</p>
    </hgroup>
    <div class="tags">
        {#each data.meta.categories as category}
            <span class="surface-4">&num;{category}</span>
        {/each}
    </div>
    <div class="prose">
        <data.content />
    </div>
</article>
<style>
    article {
        max-inline-size: 75ch;
        margin-inline: auto;
        line-height: 1.6;
        font-family: var(--font-system-ui), sans-serif;

        hgroup {
            text-align: center;
            margin-bottom: 1rem;

            h1 {
                text-transform: uppercase;
                font-size: 2.2rem;
                letter-spacing: 1px;
                margin-bottom: 0.3rem;
            }

            h1 + p {
                font-size: 1rem;
                color: #555;
            }
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            justify-content: center;
            margin-top: 10px;

            span {
                background: #f4f4f4;
                color: #333;
                padding: 6px 10px;
                border-radius: 12px;
                font-size: 0.85rem;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
</style>