<script>
    import { account } from "sveeeth";

    /** @param {string} address*/
    function addressToGradient(address) {
        const startColor = `#${address.substring(5, 11)}`;
        const endColor = `#${address.substring(12, 18)}`;
        return `linear-gradient(${startColor}, ${endColor})`;
    }

    /** @type {string}*/
    let borderRadius = "999px";

    /** @type {string}*/
    let radius = "64px";

    /** @type {string | undefined}*/
    let src;

    export { borderRadius, radius, src };
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
            $account.address
        )};"
    />
{/if}
