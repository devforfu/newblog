<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import PageTransition from './transition.svelte';
  import '@fontsource/jetbrains-mono';

  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { theme, availableThemes, type Theme } from '$lib/theme.svelte';

  let { children, data } = $props();

  let showPlaceholder = false;
  let loaded = $state(false);

  const unsubscribe = theme.subscribe(value => {
    if (browser && document) {
      document.documentElement.setAttribute('color-scheme', value);
    }
  });

  onMount(() => {
    if (browser) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme && availableThemes.includes(storedTheme as Theme)) {
        theme.set(storedTheme as Theme);
      }
    }
    loaded = true;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>
<svelte:head>
  {#if loaded}
  <link rel="stylesheet" href="/themes/common.css" />
  <link rel="stylesheet" href="/themes/{$theme}/code.css" />
  <link rel="stylesheet" href="/themes/{$theme}/components.css" />
  {/if}
</svelte:head>
{#if showPlaceholder}
<article class="announcement">
  <h1>Under development 🚧</h1>
  <p>The blog is being migrated to a new platform. Stay tuned!</p>
</article>
{:else}
<div class="page-container">
  <Header />
  <div class="layout">
    <main>
      <PageTransition url={data.url}>
        {@render children?.()}
      </PageTransition>
    </main>
    <Footer />
  </div>
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

  .page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--theme-background);
  }

  .layout {
    flex: 1;
    max-inline-size: 1200px;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-inline: auto;
    padding-inline: var(--space-base);

    @media (min-width: 1440px) {
      padding-inline: 0;
    }

    main {
      padding-block: var(--space-xl);
    }
  }
</style>