<script>
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import Sidebar from "./Sidebar.svelte";
  import github from "./github.svg";
  import monokai from "svelte-highlight/styles/monokai";
  import "./style.css";

  inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
  {@html monokai}
</svelte:head>
  <main>  
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
    <div class="row stretch">
      <Sidebar />
      <div class="column content">
        <div class="column max-w">
          <slot/>
        </div>
      </div>
    </div>
  </main>

<style>

  header {
    background-color: #1d1814;
    padding-inline: 1rem;
    color: white;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    padding-inline: 3rem;
    padding-top: 1rem;
    width: calc(100vw - 175px - 6rem);
  }

</style>
