<script>
    import { shortAddress } from "../../utils.js";
    import Copy from "./Copy.svelte";

    /** @type {`0x{string}`}  */
    export let address;
</script>

<div class="row align gap">
    <h2>{shortAddress(address)}</h2>
    <Copy text={address} />
</div>
