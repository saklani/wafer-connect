<script>
    /** @param {string} address*/
    function addressToGradient(address) {
        const startColor = `#${address.substring(5, 11)}`;
        const endColor = `#${address.substring(12, 18)}`;
        return `linear-gradient(${startColor}, ${endColor})`;
    }

    /** @type {`0x{string}`}  */
    let address;

    /** @type {string}*/
    let borderRadius = "999px";

    /** @type {string}*/
    let radius = "64px";

    /** @type {string | null}*/
    let src = null;

    export { address, borderRadius, radius, src };
</script>

{#if src}
    <img
        style="height: {radius}; width: {radius}; border-radius: {borderRadius};"
        alt="avatar"
        {src}
    />
{:else}
    <div
        style="height: {radius}; width: {radius}; border-radius: 999px; background:{addressToGradient(
            address
        )};"
    />
{/if}
