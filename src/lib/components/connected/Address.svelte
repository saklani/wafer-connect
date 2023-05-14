<script>
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
    <div
      style="height: 24px; width: 24px; display: flex; align-items: center; justify-contents: center;"
      in:fade={{ delay: 500, duration: 500 }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M17.0156 5.40063L5.70192 16.7143"
          stroke="var(--address-text-color)"
          stroke-linecap="round"
        />
        <path
          d="M0.995605 12.0046L5.67714 16.6862"
          stroke="var(--address-text-color)"
          stroke-linecap="round"
        />
      </svg>
    </div>
  {:else}
    <div
      style="height: 24px; width: 24px; display: flex; align-items: center; justify-contents: center;"
      in:fade={{ delay: 300 }}
    >
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
        <rect
          x="2.84668"
          y="0.5"
          width="12.6533"
          height="12.6533"
          rx="1.5"
          stroke="var(--address-text-color)"
        />
        <rect
          x="0.5"
          y="3.48682"
          width="12.6533"
          height="12.6533"
          rx="1.5"
          fill="transparent"
          stroke="var(--address-text-color)"
        />
      </svg>
    </div>
  {/if}
</div>

<style>
  :root {
    --address-font-size: 1.1rem;
    --address-text-color: black;
    --address-hover: rgb(73, 69, 69);
  }
  .address {
    align-items: center;
    border-radius: var(--border-radius);
    cursor: pointer;
    display: flex;
    gap: 8px;
    padding-inline: 4px;
  }
  .address:hover {
    color: var(--address-hover);
  }
  .address > h3 {
    font-size: var(--address-font-size);
    color: var(--address-text-color);
  }
</style>
