<script>
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import Sidebar from "./Sidebar.svelte";
  import github from "./github.svg";
  import "./style.css";

  inject({ mode: dev ? "development" : "production" });
</script>

<div class="app">
  <header>
    <h3>Wafer Connect</h3>
    <a href="https://github.com/saklani/wafer-connect">
      <img
        style="height: 32px; width: 32px; background: white; border-radius: 999px;"
        src={github}
        alt="https://github.com/saklani/wafer-connect"
      />
    </a>
  </header>
  <main>
    <div class="row">
      <Sidebar />
      <div class="content">
        <slot />
      </div>
    </div>
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0px;
    padding-bottom: 50px;
    margin: 0px;
    background-color: "#F4F4F4";
  }

  header {
    background-color: #1d1814;
    padding-inline: 0.5rem;
    color: white;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
  .content {
    padding: 1rem;
    width: calc(100vw - 175px - 2rem);
  }
  .row {
    display: flex;
  }
</style>
