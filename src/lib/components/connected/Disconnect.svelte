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
  :root {
    --disconnect-background-color: rgb(243, 71, 71);
    --disconnect-color: white;
    --disconnect-hover: rgb(210, 63, 63);
    --border-radius: 6px;
  }
  button {
    background-color: var(--disconnect-background-color);
    color: var(--disconnect-color);
    justify-content: center;
    border-radius: var(--border-radius);
  }

  button:hover {
    background-color: var(--disconnect-hover);
  }
</style>
