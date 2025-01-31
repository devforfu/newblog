<script lang="ts">
  import Publication from "../publication.svelte";
  let { data } = $props();
</script>
<Publication {data} />
