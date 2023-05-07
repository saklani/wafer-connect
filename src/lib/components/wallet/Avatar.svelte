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
  <img class="avatar" alt="avatar" {src} />
{:else}
  <div class="avatar" style="background: {addressToGradient(address)};" />
{/if}

<style>
  .avatar {
    border-radius: var(--avatar-radius, 999px);
    height: var(--radius, 64px);
    width: var(--radius, 64px);
  }
</style>
