<script>
  import sveeeth, { account, configureChains, network } from "sveeeth";
  import { publicProvider } from "sveeeth/providers";
  import { chainStore } from "../chains.js";
  import Connected from "./Connected.svelte";
  import Disconnected from "./Disconnected.svelte";
  import Loading from "./Loading.svelte";
  import Unsupported from "./Unsupported.svelte";
  import "./style.css";

  /** @type {import("@wagmi/core").Chain | undefined}*/
  let chains;

  const { provider } = configureChains(chains ?? $chainStore, [
    publicProvider(),
  ]);

  sveeeth({ provider });

  export { chains };
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
