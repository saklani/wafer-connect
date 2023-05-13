<script>
  import ConnectButton, {
    darkTheme,
    getDefaultConnectors,
    lightTheme,
  } from "$lib/index.js";
  import { configureChains, createConfig } from "@wagmi/core";
  import { mainnet, polygon } from "@wagmi/core/chains";
  import { publicProvider } from "@wagmi/core/providers/public";

  const { chains, publicClient } = configureChains(
    [mainnet, polygon],
    [publicProvider()]
  );

  const { connectors, wallets } = getDefaultConnectors({
    appName: "example",
    projectId: "956d5ec8e006d78c793f06be590de1fa",
    chains,
  });

  const wagmiConfig = createConfig({
    chains,
    connectors,
    publicClient,
  });

  let theme = lightTheme;
</script>

<div class="column">
<h1>Themes</h1>
<div class="column center focus">

  <div class="row controls">
   <!-- svelte-ignore a11y-click-events-have-key-events -->
   <svg
     on:click={() => (theme = lightTheme)}
     width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 3V1M18 10.5H20M15.8033 15.8033L17.2175 17.2175M10.5 20V18M1 10.5H3M3.78249 3.78249L5.1967 5.1967M5.19668 15.8031L3.78247 17.2173M17.2175 3.78256L15.8033 5.19678M14.5 10.5C14.5 12.7091 12.7091 14.5 10.5 14.5C8.29086 14.5 6.5 12.7091 6.5 10.5C6.5 8.29086 8.29086 6.5 10.5 6.5C12.7091 6.5 14.5 8.29086 14.5 10.5Z"
          stroke={theme === lightTheme ? "black" : "lightgray"}
          stroke-width="1.25"
          stroke-linecap="round"
        />
      </svg>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <svg
        on:click={() => (theme = darkTheme)}
        width="19"
        height="19"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M5.95221 2C2.80737 3.16531 1 6.19495 1 9.7451C1 14.3042 4.69579 18 9.2549 18C12.8051 18 15.8347 16.1924 17 13.0478C16.06 13.4261 15.0337 13.6193 13.9581 13.6193C9.4524 13.6193 5.38084 9.5477 5.38084 5.04206C5.38084 3.9664 5.57393 2.94074 5.95221 2Z"
          stroke={theme === darkTheme ? "black" : "lightgray"}
          stroke-width="1.25"
          stroke-linecap="round"
        />
      </svg>
    </div>
    {#key theme}
      <ConnectButton {wagmiConfig} {theme} {connectors} {wallets} />
    {/key}
  </div>

<zero-md src="../../documentation/02-themes.md" />
</div>

<style>
  .focus {
    position: relative;
    border: solid 0.1px grey;
    border-radius: 8px;
    min-height: 200px;
    max-width: 600px;
  }
  .controls {
    position: absolute;
    top: 8px;
    right: 8px;
    border-radius: 25px;
    border: solid 1px lightgray;
    padding-inline: 8px;
    padding-block: 4px;
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .column {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
  .row {
    display: flex;
    gap: 8px;
  }
</style>
