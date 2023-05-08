<script>
  import sveeeth, { account, configureChains, network } from "sveeeth";
  import { mainnet, optimism, polygon, sepolia } from "sveeeth/chains";
  import {
      alchemyProvider,
      infuraProvider,
      publicProvider,
  } from "sveeeth/providers";
  import { waferStore } from "./store.js";
  import { defaultTheme } from "./theme.js";

  import Connected from "./components/Connected.svelte";
  import Disconnected from "./components/Disconnected.svelte";
  import Loading from "./components/Loading.svelte";
  import Unsupported from "./components/Unsupported.svelte";

  import "./style.css";

  /** @type {import("@wagmi/core").Chain[]}*/
  let chains = [mainnet, polygon, optimism, sepolia];

  /** @type {string} */
  let walletConnectProjectId;

  let theme = defaultTheme;

  /** @type {string | undefined} */
  let ALCHEMY_API_KEY;

  /** @type {string | undefined} */
  let INFURA_API_KEY;

  let providers = [publicProvider()];
  
  if (ALCHEMY_API_KEY)
    providers.push(alchemyProvider({ apiKey: ALCHEMY_API_KEY }));

  if (INFURA_API_KEY)
    providers.push(infuraProvider({ apiKey: INFURA_API_KEY }));

  waferStore.set({ chains, theme, walletConnectProjectId });

  const { provider } = configureChains($waferStore.chains, providers);

  sveeeth({ provider });

  export {
    chains,
    theme,
    walletConnectProjectId,
    ALCHEMY_API_KEY,
    INFURA_API_KEY,
  };
</script>

{#if $account.status === "connected"}
  {#if $network.chain.unsupported}
    <Unsupported
      --unsupported-background-color={$waferStore.theme.unsupported
        .backgroundColor}
      --unsupported-color={$waferStore.theme.unsupported.color}
    />
  {:else}
    <Connected
      address={$account.address}
      --connected-background-color={$waferStore.theme.connected.backgroundColor}
      --connected-color={$waferStore.theme.connected.color}
    />
  {/if}
{:else if $account.status === "disconnected"}
  <Disconnected
    --disconnected-background-color={$waferStore.theme.disconnected
      .backgroundColor}
    --disconnected-color={$waferStore.theme.disconnected.color}
  />
{:else}
  <Loading
    --loading-background-color={$waferStore.theme.loading.backgroundColor}
    --loading-color={$waferStore.theme.loading.color}
  />
{/if}
