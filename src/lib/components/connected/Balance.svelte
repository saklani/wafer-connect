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
    --balance-font-size: 1.5rem;
    --balance-text-color: black;
    --border-radius: 4px;
  }
  h2 {
    font-size: var(--balance-font-size);
    color: var(--balance-text-color);
  }
  div {
    border-radius: var(--border-radius);
    min-width: 48px;
    padding-inline: 16px;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
</style>
