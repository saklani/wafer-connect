<script>
  import { fetchBalance } from "@wagmi/core";
  import { account } from "sveeeth";
</script>

<div>
  {#await fetchBalance({ address: $account.address }) then result}
    <h2>{result.formatted} {result.symbol}</h2>
  {/await}
</div>

<style>
  :root {
    --balance-background-color: white;
    --balance-font-size: 1.5rem;
    --balance-color: black;
    --border-radius: 4px;
  }
  h2 {
    font-size: var(--balance-font-size);
    color: var(--balance-color);
  }
  div {
    border-radius: var(--border-radius);
    min-width: 48px;
    padding-inline: 8px;
    height: 42px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: var(--balance-background-color);
  }
</style>
