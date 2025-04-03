<script lang="ts">
  import * as config from '$lib/config';
</script>
<footer class="content">
  <p class="copyright">{config.title} &copy; 2017&mdash;{new Date().getFullYear()}</p>
</footer>
<style>
  .content {
    margin: 2rem auto 0;
    font-size: 0.9rem;
    font-family: var(--font-monospace-code), monospace;
    padding: 1rem;
    background: black;
    width: 100%;
  }

  .copyright {
    margin: 0 auto;
    text-align: center;
    color: white;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }
  }
</style>