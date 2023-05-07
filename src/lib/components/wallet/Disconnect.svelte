<script>
  import { disconnect } from "sveeeth";
</script>

<button on:click={disconnect}> Disconnect </button>

<style>
  button {
    background-color: var(--disconnect-background-color, rgb(243, 71, 71));
    color: var(--disconnect-color, white);
    font-size: var(--disconnect-font-size, 0.9rem);
    justify-content: center;
  }

  button:hover {
    background-color: var(--hover, rgb(210, 63, 63));
  }
</style>
