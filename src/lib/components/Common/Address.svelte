<script>
    import { account } from "sveeeth";
    import { shortAddress } from "../../utils.js";
    import Copy from "./Copy.svelte";
</script>

<div class="row align gap">
    <h2>{shortAddress($account.address)}</h2>
    <Copy text={$account.address} />
</div>
