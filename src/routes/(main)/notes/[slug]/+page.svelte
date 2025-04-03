<script lang="ts">
    let { data } = $props();


    // Extract the title from the slug
    const title = data.title || 'Untitled Note';
</script>

<svelte:head>
    <title>{title} | Notes</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
</svelte:head>

<article class="note-container">
    <header>
        <h1>{title}</h1>
        <div class="note-divider">
            <span>◆</span>
        </div>
    </header>
    
    <div class="note-content">
        <data.content />
    </div>
    
    <footer>
        <a href="/notes" class="back-link">← Back to notes</a>
    </footer>
</article>

<style>
    .note-container {
        max-width: 800px;
        margin: 3rem auto;
        padding: 0 1.5rem 2rem;
        font-family: var(--font-system-ui), sans-serif;
        line-height: 1.6;
    }
    
    header {
        margin-bottom: 2rem;
        text-align: center;
    }
    
    h1 {
        font-size: 2rem;
        color: #1a1a2e;
        margin-bottom: 1rem;
        letter-spacing: -0.5px;
        text-transform: capitalize;
    }
    
    .note-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem 0 2rem;
    }
    
    .note-divider::before,
    .note-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: rgba(26, 26, 46, 0.1);
    }
    
    .note-divider span {
        margin: 0 1rem;
        color: #1a1a2e;
        opacity: 0.5;
        font-size: 0.8rem;
    }
    
    .note-content {
        margin-bottom: 3rem;
        font-size: 1.1rem;
    }

    footer {
        padding-top: 1.5rem;
        border-top: 1px solid rgba(26, 26, 46, 0.1);
    }
    
    .back-link {
        display: inline-block;
        color: #1a1a2e;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.2s ease, transform 0.2s ease;
    }
    
    .back-link:hover {
        color: #4263eb;
        transform: translateX(-4px);
    }
    
    @media (max-width: 768px) {
        .note-container {
            margin: 2rem auto;
            padding: 0 1rem 1.5rem;
        }
        
        h1 {
            font-size: 1.75rem;
        }
        
        .note-content {
            font-size: 1rem;
        }
    }
</style>