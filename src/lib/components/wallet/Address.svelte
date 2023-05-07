<script>
  import check from "../../images/check.svg";
  import copy from "../../images/copy.svg";
  import { fade } from "svelte/transition";
  import { sleep, shortAddress } from "../../utils.js";

  /** @type {`0x{string}`}  */
  let address;

  let copied = false;
  /** @param  {string} text */
  const copyFn = async (text) => {
    try {
      copied = true;
      await navigator.clipboard.writeText(text);
      await sleep(3000);
    } finally {
      copied = false;
    }
  };

  export { address };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  aria-label={`Ethereum address: ${shortAddress(address)}`}
  class="address"
  title="copy"
  role="button"
  tabindex="0"
  on:click={() => copyFn(address)}
>
  <h3>
    {shortAddress(address)}
  </h3>
  {#if copied}
    <div in:fade={{ delay: 500, duration: 500 }}>
      <img
        style="height: 16px; width: 16px;"
        src={check}
        alt="Address copied to clipboard"
      />
    </div>
  {:else}
    <div in:fade={{ delay: 300 }}>
      <img
        style="height: 16px; width: 16px;"
        src={copy}
        alt="Copy address to clipboard"
      />
    </div>
  {/if}
</div>

<style>
  :root {
    --address-font-size: 1rem;
    --address-color: black;
    --address-hover: rgb(73, 69, 69);
  }
  .address {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 8px;
  }
  .address:hover {
    color: var(--address-hover);
  }
  .address > h3 {
    font-size: var(--address-font-size);
    color: var(--address-color);
  }
</style>
