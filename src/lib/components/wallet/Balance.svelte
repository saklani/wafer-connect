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
  h2 {
    font-size: var(--font-size, 2rem);
    color: var(--color, black);
  }
  div {
    min-width: 48px;
    padding-inline: 8px;
    height: 42px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
</style>
