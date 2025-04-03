<script lang="ts">
    import { page } from '$app/state';
    import Escape from "$lib/components/Escape.svelte";

    const navigationLayout = [
        {id: 1, href: '/about', label: 'About'},
        {id: 2, href: '/', label: 'Blog'},
        {id: 3, href: '/cv', label: 'CV', external: true}
    ];
</script>
<nav class="navbar navbar-theme">
    {#each navigationLayout as nav (nav.id)}
        <a href={nav.href}
           class="nav-item"
           target={nav.external ? "_blank" : "_self"}
           rel={nav.external ? "noopener noreferrer" : ""}
           class:active={nav.href === page.url.pathname}>
            {nav.label}
            {#if nav.external}
                <Escape />
            {/if}
        </a>
    {/each}
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