<script>
    import { fade } from "svelte/transition";
</script>

<button class="loading" out:fade={{ duration: 300 }} disabled>
    Connecting...
</button>

<style>
    button {
        background-color: var(--backgroundColor, rgba(235, 235, 235, 0.9));
        color: var(--color, black);
    }
</style>
