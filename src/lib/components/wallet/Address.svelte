<script>
  import check from "$lib/images/check.svg";
  import copy from "$lib/images/copy.svg";
  import { sleep } from "$lib/utils.js";
  import { fade } from "svelte/transition";
  import { shortAddress } from "../../utils.js";

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
  class="address"
  title="copy"
  aria-label="address"
  on:click={() => copyFn(address)}
>
  <h3>
    {shortAddress(address)}
  </h3>
  {#if copied}
    <div in:fade={{ delay: 500, duration: 500 }}>
      <img style="height: 16px; width: 16px;" src={check} alt="copied" />
    </div>
  {:else}
    <div in:fade={{ delay: 300 }}>
      <img style="height: 16px; width: 16px;" src={copy} alt="copy" />
    </div>
  {/if}
</div>

<style>
  .address {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 8px;
  }
  .address:hover {
    color: var(--address-hover, rgba(63, 65, 63, 1));
  }
  .address > h3 {
    font-size: var(--address-font-size, 1rem);
    color: var(--address-color, black);
  }
</style>
