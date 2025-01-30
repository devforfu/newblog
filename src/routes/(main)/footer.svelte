<script lang="ts">
  import * as config from '$lib/config';
</script>
<footer>
  <p>{config.title} &copy 2017&mdash;{new Date().getFullYear()}</p>
</footer>
<style>
  footer {
    text-align: center;
    padding-block: 20px;
    border-top: 1px solid black;
  }
</style>