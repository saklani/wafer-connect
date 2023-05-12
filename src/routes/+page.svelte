<script>
  import ConnectButton, {
    darkTheme,
    getDefaultConnectors,
    lightTheme,
  } from "$lib/index.js";
  import { configureChains, createConfig } from "@wagmi/core";
  import { mainnet, optimism, polygon } from "@wagmi/core/chains";
  import { publicProvider } from "@wagmi/core/providers/public";

  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism],
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

<div class="column padding gap">
  <h1>Wafer Connect</h1>
  <p>
    <code> wafer-connect </code> is a Svelte component library to connect a wallet
    to your dApp. It's goal is to create an easy to integrate and customizable experience.
  </p>
  <h2>Getting Started</h2>
  <code style="padding: 8px;">
    npm install @wagmi/core viem wafer-connect
  </code>
  <h2>Try it out</h2>
  <p>Best way to get an idea of what is possible is to try it out.</p>
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
  <div style="padding-block: 1rem;" class="column gap-small">
    <h2>Features</h2>
    <h3>Built on industry standards</h3>
    <p>
      Uses libraries that are standard in the ecosystem such as
      <a href="https://wagmi.sh"> wagmi </a>
      and <a href="https://viem.sh">viem</a>.
    </p>
    <h3>Customizable</h3>
    <p>
      Customise colors according to your branding and add your custom
      connectors.
    </p>
  </div>
</div>

<style>
  .focus {
    position: relative;
    border: solid 0.1px grey;
    border-radius: 8px;
    min-height: 150px;
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
    height: 100%;
    max-width: 600px;
  }
  .padding {
    padding: 2rem;
  }
  .gap-small {
    gap: 0.5rem;
  }
  .gap {
    gap: 1rem;
  }
  .row {
    display: flex;
    gap: 8px;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0.25rem;
  }

  code {
    background-color: #d5d5d5;
    padding-inline: 4px;
    border-radius: 2px;
  }
</style>
