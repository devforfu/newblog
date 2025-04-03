<script lang="ts">
    let { data } = $props();
    let { slugs, names } = data;
</script>

<section class="notes-container">
    <h1>Notes</h1>
    <div class="notes-description">
        Quick thoughts, code snippets, and short-form content that didn't find a better home.
    </div>
    
    {#if slugs && slugs.length > 0}
        <ul class="notes-list">
            {#each Array(slugs.length) as _, i}
                <li class="note-item">
                    <a href="notes/{slugs[i]}" class="note-link">
                        <span class="note-icon">◆</span>
                        <span class="note-name">{names[i]}</span>
                    </a>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="empty-message">No notes available at the moment.</p>
    {/if}
</section>

<style>
    .notes-container {
        max-width: 800px;
        margin: 3rem auto;
        padding: 0 1.5rem;
    }
    
    h1 {
        color: #1a1a2e;
        margin-bottom: 0.5rem;
        font-size: 2rem;
        letter-spacing: -0.5px;
    }
    
    .notes-description {
        font-size: 1.1rem;
        color: #666;
        margin-bottom: 2rem;
        font-style: italic;
    }
    
    .notes-list {
        padding: 0;
        list-style: none;
    }
    
    .note-item {
        margin-bottom: 0.75rem;
        border-bottom: 1px dashed rgba(26, 26, 46, 0.1);
    }
    
    .note-item:last-child {
        border-bottom: none;
    }
    
    .note-link {
        display: flex;
        align-items: center;
        padding: 1rem 0.5rem;
        color: #1a1a2e;
        text-decoration: none;
        transition: all 0.2s ease;
        border-radius: 0.25rem;
    }
    
    .note-link:hover {
        background-color: rgba(242, 242, 252, 0.8);
        padding-left: 1rem;
    }
    
    .note-icon {
        color: #1a1a2e;
        margin-right: 1rem;
        font-size: 0.8rem;
        opacity: 0.5;
        transition: all 0.3s ease;
    }
    
    .note-link:hover .note-icon {
        color: #4263eb;
        opacity: 1;
        transform: rotate(45deg);
    }
    
    .note-name {
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: capitalize;
        position: relative;
        z-index: 1;
        transition: all 0.2s ease;
    }
    
    .note-link:hover .note-name {
        color: #4263eb;
        transform: translateX(5px);
    }
    
    .note-link:hover .note-name::after {
        width: 100%;
    }
    
    .note-name::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #4263eb;
        transition: width 0.3s ease;
        z-index: -1;
    }
    
    .empty-message {
        text-align: center;
        color: #666;
        font-size: 1.1rem;
        padding: 2rem;
        background: #f5f7fa;
        border-radius: 0.25rem;
    }
    
    @media (max-width: 768px) {
        .notes-container {
            margin: 2rem auto;
        }
        
        .note-name {
            font-size: 1.1rem;
        }
    }
</style>