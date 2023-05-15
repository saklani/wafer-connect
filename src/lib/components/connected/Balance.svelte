<script>
  import { balance } from "../../stores";
  import { abbreviateETHBalance } from "../../utils.js";
</script>

<div>
  {#await $balance then result}
    <h3>
      {abbreviateETHBalance(parseFloat(result.formatted))}
      {result.symbol}
    </h3>
  {/await}
</div>

<style>
  :root {
    --balance-font-size: 1.1rem;
    --balance-text-color: black;
  }
  h3 {
    font-size: var(--balance-font-size);
    color: var(--balance-text-color);
  }

</style>
