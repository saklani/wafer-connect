<script>
  import { fetchBalance } from "@wagmi/core";
  import { abbreviateETHBalance } from "../../utils.js";
  import { account } from "../../stores/account.js";
  import { network } from "../../stores/network.js";
</script>

<div style="height: 1.4rem;">
  {#await fetchBalance({address: account.address, chainId: $network.chain.id}) then result}
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
