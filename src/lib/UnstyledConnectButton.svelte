<script>
  import { account } from "./store/account.js";
  import { network } from "./store/network.js";

  import Connected from "./components/Connected.svelte";
  import Disconnected from "./components/Disconnected.svelte";
  import Loading from "./components/Loading.svelte";
  import Unsupported from "./components/Unsupported.svelte";
</script>

{#if $account.status === "connected"}
  {#if $network.chain.unsupported}
    <Unsupported />
  {:else}
    <Connected address={$account.address} />
  {/if}
{:else if $account.status === "disconnected"}
  <Disconnected />
{:else}
  <Loading />
{/if}
