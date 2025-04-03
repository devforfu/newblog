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
    padding: 1.5rem;
    background: #1a1a2e;
    width: 100%;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  }

  .copyright {
    margin: 0 auto;
    text-align: center;
    color: #e6e6e6;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }
  }
</style>