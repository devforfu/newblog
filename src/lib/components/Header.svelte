<script lang="ts">
    import { page } from '$app/state';
    import Escape from "$lib/components/Escape.svelte";
</script>
<nav class="navbar navbar-theme">
    <a href="/about" class="nav-item">About</a>
    <a href="/" class="nav-item">Blog</a>
    <a href="/cv"
       class="nav-item"
       target="_blank"
       rel="noopener noreferrer"
       class:active={"/cv" === page.url.pathname}>
        CV <Escape />
    </a>
</nav>
<style>
    .navbar {
        display: flex;
        flex-direction: row;
        position: sticky;
        top: 0;
        z-index: 100;

        justify-content: center;
        text-align: center;
        padding: 1rem 0;
        gap: 8px;

        .nav-item {
            text-decoration: none;
            border-radius: 0.25rem;
            padding: 0.5rem;
            color: var(--nav-item-text-color);
            background: var(--nav-item-bg-color);
        }

        .nav-item.active {
            background: var(--nav-item-bg-color-active);
            color: var(--nav-item-text-color-active);
        }

        .nav-item:hover {
            background: var(--nav-item-bg-color-hover);
            color: var(--nav-item-text-color-hover);
        }
    }
</style>