<script>
    import { shortAddress } from "../../utils.js";
    import check from "$lib/images/check.svg";
    import copy from "$lib/images/copy.svg";
    import { sleep } from "$lib/utils.js";
    import { fade } from "svelte/transition";

    /** @type {`0x{string}`}  */
    let address;

    /** @type {string}  */
    let fontSize = "1rem";

    /** @type {`#{string}`} */
    let color = "#000000";

    /** @type {`#{string}`} */
    let hoverColor = "#5F5F5F";

    /** @type {`#{string}`} */
    let _color = color;

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

    export { address, color, fontSize, hoverColor };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="row align gap"
    style="color: {_color}; cursor: pointer;"
    title="copy"
    aria-label="address"
    on:click={() => copyFn(address)}
    on:mouseenter={() => (_color = hoverColor)}
    on:mouseleave={() => (_color = color)}
>
    <h3 style="font-size: {fontSize}">
        {shortAddress(address)}
    </h3>
    {#if copied}
        <div in:fade={{ delay: 500, duration: 500 }} class="row icon center">
            <img style="height: 16px; width: 16px; color: {_color};" src={check} alt="copied" />
        </div>
    {:else}
        <div in:fade={{ delay: 300 }} out:fade class="row icon center">
            <img style="height: 16px; width: 16px; color: {_color};" src={copy} alt="copy" />
        </div>
    {/if}
</div>
