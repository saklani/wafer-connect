<script>
  import { page } from "$app/stores";

  $: path = $page.url.pathname;
</script>

<div class="sidebar">
  <a
    href="/"
    style="background-color: {path === "/" ? "#e5e5e5" : "transparent"};
    color: {path === "/" ? "black" : "#6f6f6f"};"
  >
    Introduction
  </a>
  <a
    href="/getting-started"
    style="background-color: {path === "/getting-started" ? "#e5e5e5" : "transparent"};
    color: {path === "/getting-started" ? "black" : "#6f6f6f"};"
  >
    Getting Started
  </a>
  <a
    href="/themes"
    style="background-color: {path === "/themes" ? "#e5e5e5" : "transparent"};
    color: {path === "/themes" ? "black" : "#6f6f6f"};"
  >
    Themes
  </a>
  <a
    href="/actions"
    style="background-color: {path === "/actions" ? "#e5e5e5" : "transparent"};
    color: {path === "/actions" ? "black" : "#6f6f6f"};"
  >
    Actions
  </a>
  <a
    href="/stores"
    style="background-color: {path === "/stores" ? "#e5e5e5" : "transparent"};
    color: {path === "/stores" ? "black" : "#6f6f6f"};"
  >
    Stores
  </a>
</div>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 250px;
    min-height: 100vh;
    border-right: solid 0.1px lightgrey;
  }

  a {
    display: flex;
    padding-block: 12px;
    padding-inline: 1rem;
    text-decoration: none;
  }

  a:hover {
    background-color: #e5e5e5;
    color: rgb(43, 39, 39);
  }
</style>
