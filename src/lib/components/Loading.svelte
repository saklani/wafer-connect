<script>
    import { fade } from "svelte/transition";
</script>

<button class="loading" in:fade disabled>
    Connecting...
</button>

<style>
    button {
        background-color: var(--backgroundColor, rgba(235, 235, 235, 0.9));
        color: var(--color, black);
    }
</style>
