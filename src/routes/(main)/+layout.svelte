<script lang="ts">
  import '@fontsource/jetbrains-mono';

  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import PageTransition from './transition.svelte';

  let { children, data } = $props();

  let showPlaceholder = true;
</script>
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
  :global(body) {
    background-color: white;
    margin: 0;
    padding: 0;
  }

  .announcement {
    height: 100%;
    max-inline-size: 1440px;

    display: flex;
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
    padding: 0 1rem;
  }
</style>