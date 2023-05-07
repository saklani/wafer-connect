<script>
  import { fade } from "svelte/transition";
</script>

<button class="loading" in:fade disabled> Connecting... </button>

<style>
  button {
    background-color: var(--unsupported-background-color, rgb(190, 59, 59));
    color: var(--unsupported-color, black);
  }
</style>
