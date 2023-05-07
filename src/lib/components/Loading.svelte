<script>
  import { fade } from "svelte/transition";
</script>

<button in:fade disabled> Connecting... </button>

<style>
  button {
    background-color: var(--loading-background-color, rgb(190, 59, 59));
    color: var(--loading-color, black);
  }
</style>
