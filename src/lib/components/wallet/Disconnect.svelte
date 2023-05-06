<script>
  import { disconnect } from "sveeeth";
</script>

<button on:click={disconnect}> Disconnect </button>

<style>
  button {
    background-color: var(--button-background-color, rgb(243, 71, 71));
    border: none;
    border-radius: var(--border-radius, 4px);
    color: var(--color, white);
    font-size: var(--font-size, 0.9rem);
    justify-content: center;
  }

  button:hover {
    background-color: var(--hover, rgb(210, 63, 63));
  }
</style>
