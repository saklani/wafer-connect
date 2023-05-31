<script>
  import { balance } from "../../store/balance.js";
  import { abbreviateETHBalance } from "../../utils.js";
</script>

<div style="height: 1.4rem;">
  {#await $balance then result}
    <h3>
      {abbreviateETHBalance(parseFloat(result.formatted))}
      {result.symbol}
    </h3>
  {/await}
</div>

<style>
  h3 {
    color: var(--wafer-dialog-text-color);
    cursor: default;
  }
</style>
