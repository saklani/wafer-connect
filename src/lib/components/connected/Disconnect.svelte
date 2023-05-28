<script>
  import { disconnect } from "@wagmi/core";

  let isDisconnecting = false;

  async function handleDisconnect() {
    if (isDisconnecting) return;
    isDisconnecting = true;
    try {
      await disconnect();
    } finally {
      isDisconnecting = false;
    }
  }
</script>

<button on:click={handleDisconnect} disabled={isDisconnecting}>
  Disconnect
</button>

<style>
  button {
    background-color: var(--wafer-error-background-color);
    color: var(--wafer-error-text-color);
    justify-content: center;
  }

  button:hover {
    background-color: var(--wafer-error-hover-color);
  }
</style>
