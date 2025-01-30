<script lang="ts">
    import katex from "katex";
    let { math, displayMode = false } = $props();
    const options = { displayMode, throwOnError: true };
</script>

{@html katex.renderToString(math, options)}