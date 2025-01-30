<script lang="ts">
  // import Toggle from './toggle.svelte';
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const activeSection = derived(page, ($page) => {
    const path = $page.url.pathname;
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/cv')) return 'cv';
    return 'blog';
  });

</script>
<nav>
  <div class="nav-container">
    <ul class="links">
      <li class="{$activeSection === 'about' ? 'active' : ''}"><a href="/about">About</a></li>
      <li class="{$activeSection === 'blog' ? 'active' : ''}"><a href="/">Blog</a></li>
      <li class="{$activeSection === 'cv' ? 'active' : ''}"><a href="/cv">CV</a></li>
    </ul>
  </div>
<!--  <Toggle />-->
</nav>
<style>
  nav {
    padding-block: 10px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    .links {
      margin-block: var(--size-7);

      @media (min-width: 768px) {
        display: flex;
        gap: var(--size-7);
        margin-block: 0;
      }

      li {
        list-style: none;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .nav-container {
    position: relative;
    display: inline-block;
    margin: 0 auto;
  }

  .links {
    display: flex;
    gap: 20px;
    position: relative;
  }

  .links li {
    list-style: none;
    position: relative;
    padding: 8px 12px;
    border-radius: 12px;
    transition: color 0.3s ease-in-out;
  }

  .links a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    position: relative;
    z-index: 2;
  }

  .links li.active {
    background: black;
    color: white;
  }
</style>