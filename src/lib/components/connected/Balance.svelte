<script>
  import { balance } from "../../stores";
  import { abbreviateETHBalance } from "../../utils.js";
</script>

<div>
  {#await $balance then result}
    <h2>
      {abbreviateETHBalance(parseFloat(result.formatted))}
      {result.symbol}
    </h2>
  {/await}
</div>

<style>
  :root {
    --balance-font-size: 1.3rem;
    --balance-text-color: black;
  }
  h2 {
    font-size: var(--balance-font-size);
    color: var(--balance-text-color);
  }

</style>
