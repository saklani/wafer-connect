<script>
  import Sidebar from "./Sidebar.svelte";
</script>

<div class="app">
  <main>
    <div class="row">
      <Sidebar />
      <slot />
    </div>
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0px;
    margin: 0px;
    background-color: "#FCFCFC";
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }

  .row {
    display: flex;
  }
</style>
