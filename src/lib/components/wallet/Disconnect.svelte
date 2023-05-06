<script>
    import { disconnect } from "sveeeth";
</script>

<button on:click={disconnect}> Disconnect </button>

<style>
    button {
        background-color: var(--backgroundColor, rgb(243, 71, 71));
        border: none;
        border-radius: var(--borderRadius, 4px);
        color: var(--color, white);
        font-size: var(--fontSize, 0.9rem);
        justify-content: center;
    }

    button:hover {
        background-color: var(--hover, rgb(210, 63, 63));
    }
</style>
