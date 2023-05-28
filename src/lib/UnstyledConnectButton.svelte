<script>
  import { account } from "./stores/account.js";
  import { chains as _chains } from "./stores/chains.js";
  import { connectors as _connectors } from "./stores/connectors.js";
  import { network } from "./stores/network.js";

  import Connected from "./components/Connected.svelte";
  import Disconnected from "./components/Disconnected.svelte";
  import Loading from "./components/Loading.svelte";
  import Unsupported from "./components/Unsupported.svelte";

  /** @type {import("@wagmi/core").Chain[]}*/
  let chains;

  /** @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}[]} */
  let wallets;

  /** @type {import("@wagmi/core/connectors").Connector[]}*/
  let connectors;

  export { connectors, chains, wallets };
  _chains.set(chains);
  _connectors.set({ wagmiConnectors: connectors, wallets });
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


