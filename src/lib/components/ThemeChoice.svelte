<script lang="ts">
    import { availableThemes, theme } from '$lib/theme.svelte';
</script>
<select bind:value={$theme} class="theme-selector">
    {#each availableThemes as themeChoice}
        <option value={themeChoice}>{themeChoice}</option>
    {/each}
</select>
<style>
    .theme-selector {
        margin-left: 1rem;
        margin-right: 1rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-family: inherit;
        cursor: pointer;
    }
</style>