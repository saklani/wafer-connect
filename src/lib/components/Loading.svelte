<script>
  import { fade } from "svelte/transition";
</script>

<button in:fade disabled> Connecting... </button>

<style>
  :root {
    --loading-background-color: rgb(235, 235, 235);
    --loading-color: black;
    --border-radius: 6px;
  }
  button {
    background-color: var(--loading-background-color);
    color: var(--loading-color);
    border-radius: var(--border-radius);
  }
</style>
