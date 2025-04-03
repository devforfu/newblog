<script lang="ts">
  import '@fontsource/jetbrains-mono';

  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import PageTransition from './transition.svelte';

  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { theme, availableThemes, type Theme } from '$lib/theme.svelte';

  let { children, data } = $props();
  let showPlaceholder = false;
  let loaded = $state(false);

  onMount(() => {
    if (browser) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme && availableThemes.includes(storedTheme as Theme)) {
        theme.set(storedTheme as Theme);
      }
    }
    loaded = true;
  });
</script>
<svelte:head>
  <link rel="stylesheet" href="/themes/shared.css" />
  <link rel="stylesheet" href="/themes/bright/code.css" />
  <link rel="stylesheet" href="/themes/bright/components.css" />
</svelte:head>
{#if showPlaceholder}
<article class="announcement">
  <h1>Under development 🚧</h1>
  <p>The blog is being migrated to a new platform. Stay tuned!</p>
</article>
{:else}
<div class="layout">
  <Header />
  <main>
    <PageTransition url={data.url}>
      {@render children?.()}
    </PageTransition>
  </main>
  <Footer />
</div>
{/if}
<style>
  .announcement {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      text-align: center;
      margin: 0 auto;
    }
    p {
      text-align: center;
      font-size: var(--font-size-title);
    }
  }

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  main {
    flex: 1;
  }
</style>