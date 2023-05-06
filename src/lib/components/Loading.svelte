<script>
  import { fade } from "svelte/transition";
</script>

<button class="loading" in:fade disabled> Connecting... </button>

<style>
  button {
    background-color: var(--button-background-color, rgb(235, 235, 235));
    color: var(--color, black);
  }
</style>
