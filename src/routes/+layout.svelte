<script>
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import Sidebar from "./Sidebar.svelte";
  import github from "./github.svg";
  import "./style.css";

  inject({ mode: dev ? "development" : "production" });
</script>

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
    padding-inline: 4rem;
    padding-top: 1.5rem;
    width: calc(100vw - 175px - 8rem);
  }

</style>
