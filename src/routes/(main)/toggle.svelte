<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Sun, Moon } from 'lucide-svelte';
  import { getTheme, toggleTheme } from '$lib/theme.svelte';
</script>
<button on:click={toggleTheme} aria-label="Toggle theme">
  {#if getTheme() === 'dark'}
    <div in:fly={{ y: 10 }}>
      <Sun />
      <span>Light</span>
    </div>
  {:else}
    <div in:fly={{ y: -10 }}>
      <Moon />
      <span>Dark</span>
    </div>
  {/if}
</button>
<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;

		> * {
			display: flex;
			gap: 10px;
            align-items: center;
		}

        span {
          font-size: 1rem;
        }
	}
</style>