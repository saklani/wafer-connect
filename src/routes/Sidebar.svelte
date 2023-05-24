<script>
  import { page } from "$app/stores";
</script>

<div class="sidebar">
  <a
    href="/"
    style="color: {$page.url.pathname === '/' ? 'black' : '#6f6f6f'};"
  >
    Introduction
  </a>
  <a href="/getting-started"  style="color: {$page.url.pathname === '/getting-started' ? 'black' : '#6f6f6f'};">Getting Started</a>
  <a
    href="/themes"
    style="color: {$page.url.pathname === '/themes' ? 'black' : '#6f6f6f'};"
  >
    Themes
  </a>
  <a
    href="/actions"
    style="color: {$page.url.pathname === '/actions' ? 'black' : '#6f6f6f'};"
  >
    Actions
  </a>
  <a
    href="/stores"
    style="color: {$page.url.pathname === '/stores' ? 'black' : '#6f6f6f'};"
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
