<script lang="ts">
    let count = 0;
    function clicked() { count++; }
</script>
<div id="inline-component">
    <button onclick={clicked}>
        Increment
    </button>
    <p>{count}</p>
</div>
<style>
    #inline-component {
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
        margin: 0 auto;
        max-width: 120px;
    }

    button {
        padding: 8px 16px;
        font-size: 16px;
        font-weight: 600;
        border: none;
        background: linear-gradient(to right, #d1d1d1, #8a8a8a);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        color: #333;
        font-family: 'Georgia', serif;
        letter-spacing: 0.5px;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    }

    button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(255, 140, 0, 0.4);
        background: linear-gradient(to right, #ffe066, #ff8c00);
        color: #000;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.4);
    }
</style>