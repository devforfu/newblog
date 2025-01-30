<script lang="ts">
    import { onMount } from "svelte";
    import {highlightCode} from "$lib/highlighter";

    let { gistId, username = 'devforfu' } = $props();
    let code = $state("");

    onMount(async () => {
        if (!gistId) return;
        const response = await fetch(`/api/gist?id=${gistId}&username=${username}`);
        const { content } = await response.json();
        code = await highlightCode(content, 'python');
    });
</script>
{@html code}
<style></style>