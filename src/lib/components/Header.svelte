<script lang="ts">
    import { page } from '$app/state';
    import ThemeChoice from "$lib/components/ThemeChoice.svelte";
    import Escape from "$lib/components/Escape.svelte";

    const navigationLayout = [
        {id: 1, href: '/about', label: 'About'},
        {id: 2, href: '/', label: 'Blog'},
        {id: 3, href: '/cv', label: 'CV', external: true}
    ];
</script>
<nav class="navbar navbar-theme">
    <div class="links">
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
    </div>
    <div class="theme-container">
        <span class="theme-label">Theme:</span>
        <ThemeChoice />
    </div>
</nav>
<style>
    .navbar {
        display: flex;
        flex-direction: row;
        position: sticky;
        top: 0;
        z-index: 100;
        padding: 0.5rem;
        align-items: center;

        .links {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            justify-content: flex-start;
            align-items: center;
            margin-right: 1rem;
            margin-left: 1rem;
            gap: 1rem;

            .nav-item {
                text-decoration: none;
                border-radius: 0.25rem;
                padding: 0.5rem;
            }

            .nav-item.active {
                background: var(--nav-item-bg-color);
                color: var(--nav-item-text-color);
            }

            .nav-item:hover {
                background: var(--nav-item-bg-color-hover);
                color: var(--nav-item-text-color-hover);
            }
        }

        .theme-container {
            margin-left: auto;
        }
    }

    .theme-label {
        color: var(--theme-selection-label-color);
    }
</style>