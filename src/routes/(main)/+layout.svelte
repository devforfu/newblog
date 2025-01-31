<script lang="ts">
  import Footer from './footer.svelte'
  import Header from './header.svelte'
  import PageTransition from './transition.svelte'

  import '../../app.css';

  let { children, data } = $props();
  let showPlaceholder = false;
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
      font-size: 2rem;
    }
  }

  .layout {
    height: 100%;
    max-inline-size: 1440px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin-inline: auto;
    padding-inline: 2rem;

    @media (min-width: 1440px) {
      padding-inline: 0;
    }

    main {
      padding-block: var(--size-9);
    }
  }
</style>