<script lang="ts">
  import * as config from '$lib/config';
</script>
<footer>
  <div class="footer-content">
    <p>{config.title} &copy; 2017&mdash;{new Date().getFullYear()}</p>
    <div class="social-links">
      <a href="https://github.com/devforfu" class="social-link" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
    </div>
  </div>
</footer>
<style>
  footer {
    padding-block: var(--space-lg);
    border-top: 1px solid var(--input-border);
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    color: var(--theme-text-secondary);
    font-size: 0.9rem;
  }
  
  .social-links {
    display: flex;
    gap: var(--space-md);
  }
  
  .social-link {
    color: var(--theme-text-muted);
    transition: color var(--transition-quick);
  }
  
  .social-link:hover {
    color: var(--theme-primary);
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: var(--space-md);
      text-align: center;
    }
  }
</style>