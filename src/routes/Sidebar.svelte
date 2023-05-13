<script>
  import { page } from "$app/stores";
</script>

<div class="sidebar">
  <a
    href="/"
    style="background-color: {$page.url.pathname === '/'
      ? '#1d1814'
      : 'white'}; color: {$page.url.pathname === '/' ? 'white' : 'grey'};"
  >
    Introduction
  </a>
  <a
    href="/themes"
    style="background-color: {$page.url.pathname === '/themes'
      ? '#1d1814'
      : 'white'}; color: {$page.url.pathname === '/themes' ? 'white' : 'grey'};"
  >
    Themes
  </a>
  <a
    href="/actions"
    style="background-color: {$page.url.pathname === '/actions'
      ? '#1d1814'
      : 'white'}; color: {$page.url.pathname === '/actions'
      ? 'white'
      : 'grey'};"
  >
    Actions
  </a>
  <a
    href="/stores"
    style="background-color: {$page.url.pathname === '/stores'
      ? '#1d1814'
      : 'white'}; color: {$page.url.pathname === '/stores' ? 'white' : 'grey'};"
  >
    Stores
  </a>
</div>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 175px;
    min-height: 100vh;
    gap: 4px;
    padding: 4px;
  }

  a {
    display: flex;
    padding-block: 12px;
    padding-inline: 8px;
    border-radius: 4px;
    text-decoration: none;
  }

  a:hover {
    background-color: #e5e5e5;
    color: rgb(43, 39, 39);
  }
</style>
