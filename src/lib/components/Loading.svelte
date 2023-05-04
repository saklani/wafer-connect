<script>
    import { fade } from "svelte/transition";
</script>

<button out:fade={{ duration: 300 }} class="black" disabled>
    Connecting...
</button>