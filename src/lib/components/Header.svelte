<script lang="ts">
    import { page } from '$app/state';
    import Escape from "$lib/components/Escape.svelte";
</script>
<nav class="navbar navbar-theme">
    <a href="/about" class={["nav-item", { active: "/about" === page.url.pathname }]}>About</a>
    <a href="/" class={["nav-item", { active: "/" === page.url.pathname }]}>Blog</a>
    <a href="/cv"
       class={["nav-item", { active: "/cv" === page.url.pathname }]}
       target="_blank"
       rel="noopener noreferrer">
        CV <Escape />
    </a>
    <a href="/notes" class={["nav-item", { active: "/notes" === page.url.pathname }]}>Notes</a>
</nav>
<style>
    .navbar {
        display: flex;
        flex-direction: row;
        position: sticky;
        top: 0;
        z-index: 100;
        background-color: #1a1a2e;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

        justify-content: center;
        text-align: center;
        padding: 1rem 0;
        gap: 8px;

        .nav-item {
            text-decoration: none;
            border-radius: 0.25rem;
            padding: 0.5rem 1rem;
            color: #e6e6e6;
            background: transparent;
            transition: all 0.3s ease;
        }

        .nav-item.active {
            background: #f5f5f5;
            color: #1a1a2e;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
        }

        .nav-item:hover {
            background: #f5f5f5;
            color: #1a1a2e;
            transform: translateY(-2px);
        }
    }
</style>