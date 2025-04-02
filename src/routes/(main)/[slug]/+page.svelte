<script lang="ts">
  import Publication from "$lib/components/Publication.svelte";
  let { data } = $props();
</script>
<Publication {data} />
