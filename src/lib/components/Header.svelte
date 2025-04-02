<script lang="ts">
    import { page } from '$app/state';
    import ThemeChoice from "$lib/components/ThemeChoice.svelte";

    const navigationLayout = [
        {id: 1, href: '/about', label: 'About'},
        {id: 2, href: '/', label: 'Blog'},
        {id: 3, href: '/cv', label: 'CV', external: true}
    ];
</script>
<nav class="navbar">
    <div class="navbar-container">
        <div class="nav-links">
            {#each navigationLayout as nav (nav.id)}
                <a href={nav.href} class="nav-item" class:active={nav.href === page.url.pathname}>
                    {nav.label}
                    {#if nav.external}
                        <svg class="external-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 4H20V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 4L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="sr-only">(opens in new layout)</span>
                    {/if}
                </a>
            {/each}
        </div>
        <div class="theme-container">
            <span class="theme-label">Theme:</span>
            <ThemeChoice />
        </div>
    </div>
</nav>
<style>
    .navbar {
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 100;
        background-color: var(--navbar-background);
        box-shadow: var(--navbar-shadow);
        margin-bottom: var(--space-lg);
    }

    .navbar-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-md) var(--space-base);
    }

    .theme-container {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
    }

    .theme-label {
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-medium);
        color: var(--theme-text-secondary);
    }

    .nav-links {
        display: flex;
        gap: var(--space-md);
        align-items: center;
        flex-wrap: wrap;
    }

    .nav-item {
        padding: var(--space-sm) var(--space-base);
        border-radius: var(--border-radius-pill);
        font-size: var(--font-size-small);
        text-decoration: none;
        transition: var(--transition-medium);
        color: var(--button-text-inactive);
        font-weight: var(--font-weight-medium);
        display: flex;
        align-items: center;
        gap: var(--space-xs);
    }

    .external-icon {
        margin-left: var(--space-xs);
        transition: transform var(--transition-quick);
    }
    
    .nav-item:hover .external-icon {
        transform: translateY(-1px);
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    .nav-item:hover {
        background-color: var(--button-hover-bg);
    }

    .nav-item.active {
        background-color: var(--button-bg-active);
        color: var(--button-text-active);
        font-weight: var(--font-weight-bold);
    }

    .nav-item.active .external-icon path {
        stroke: var(--button-text-active);
    }

    @media (max-width: 768px) {
        .navbar-container {
            flex-direction: column;
            gap: var(--space-md);
        }

        .nav-links {
            width: 100%;
            justify-content: center;
            margin-bottom: var(--space-sm);
        }

        .theme-container {
            align-self: center;
        }
    }
</style>