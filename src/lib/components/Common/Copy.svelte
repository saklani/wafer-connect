<script>
    import check from "$lib/images/check.svg";
    import copy from "$lib/images/copy.svg";
    import { sleep } from "$lib/utils.js";
    import { fade } from "svelte/transition";

    /** @type {string} */
    export let text;

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
</script>

{#if copied}
    <div in:fade={{ delay: 500 }} class="row icon center">
        <img src={check} alt="copied" />
    </div>
{:else}
    <button
        class="icon"
        on:click={() => copyFn(text)}
        out:fade
        title="copy"
        aria-label="copy"
    >
        <img src={copy} alt="copy" />
    </button>
{/if}

<style>
    img {
        width: 16px;
        height: 16px;
    }
    .icon {
        background-color: transparent;
        height: 32px;
        width: 32px;
        min-width: 32px;
        align-items: center;
    }
</style>
