<script lang="ts">
    import { onMount } from "svelte";
    import { highlightCode } from "$lib/highlighter";

    let { gistId, username = 'devforfu' } = $props();
    let code = $state("");

    onMount(async () => {
        if (!gistId) return;
        const response = await fetch(`/api/gist?id=${gistId}&username=${username}`);
        const { content } = await response.json();
        const { light, dark } = await highlightCode(content, 'python');
        code = `${light}${dark}`;
    });
</script>
{@html code}
<style></style>