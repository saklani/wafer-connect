<script>
  /** @param {string} address*/
  function addressToGradient(address) {
    const startColor = `#${address.substring(5, 11)}`;
    const endColor = `#${address.substring(12, 18)}`;
    return `linear-gradient(${startColor}, ${endColor})`;
  }

  /** @type {`0x{string}`}  */
  let address;

  /** @type {string | null}*/
  let src = null;

  export { address, src };
</script>

{#if src}
  <img class="avatar" alt="Avatar" {src} />
{:else}
  <div class="avatar" style="background: {addressToGradient(address)};" />
{/if}

<style>
  .avatar {
    border-radius: var(--wafer-avatar-radius);
    height: var(--wafer-avatar-radius);
    width: var(--wafer-avatar-radius);
  }
</style>
