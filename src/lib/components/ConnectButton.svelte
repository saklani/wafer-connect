<script>
  import sveeeth, { account, configureChains, network } from "sveeeth";
  import { arbitrum, mainnet, optimism, polygon } from "sveeeth/chains";
  import { publicProvider } from "sveeeth/providers";
  import { waferStore } from "../store.js";
  import Connected from "./Connected.svelte";
  import Disconnected from "./Disconnected.svelte";
  import Loading from "./Loading.svelte";
  import Unsupported from "./Unsupported.svelte";
  import "./style.css";

  /** @type {import("@wagmi/core").Chain}*/
  let chains = [mainnet, polygon, optimism, arbitrum];

  /** @type {string} */
  let walletConnectProjectId;

  waferStore.set({chains, walletConnectProjectId});

  const { provider } = configureChains(chains ?? $waferStore.chains, [
    publicProvider(),
  ]);

  sveeeth({ provider });

  export { chains, walletConnectProjectId };
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
