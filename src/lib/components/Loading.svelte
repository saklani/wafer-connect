<script>
  import { fade } from "svelte/transition";
</script>

<button in:fade disabled> Connecting... </button>

<style>
  :root {
    --loading-background-color: rgb(235, 235, 235);
    --loading-color: black;
  }
  button {
    background-color: var(--loading-background-color);
    color: var(--loading-color);
  }
</style>
