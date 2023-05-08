<script>
  import ConnectButton from "$lib/ConnectButton.svelte";
</script>

<div class="column">
  <h1>Wafer</h1>
  <p>
    Wafer is a minimalistic svelte component library for connect a wallet to
    your Svelte/Sveltekit dApp.
  </p>
  <div class="focus">
    <ConnectButton
      walletConnectProjectId={"956d5ec8e006d78c793f06be590de1fa"}
    />
  </div>
</div>

<style>
  .focus {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 0.1px grey;
    border-radius: 4px;
    width: 100%;
    height: 300px;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  h1,
  p,
  .focus {
    max-width: 900px;
  }
</style>
