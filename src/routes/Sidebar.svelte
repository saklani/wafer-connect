<script>
    import { page } from "$app/stores";
</script>

<div class="sidebar">
  <a href="/"  style="background-color: {$page.url.pathname === "/"? "blue": "white"}; color: {$page.url.pathname === "/"? "white": "black"};"> Introduction </a>
  <a href="/actions" style="background-color: {$page.url.pathname === "/actions"? "blue": "white"}; color: {$page.url.pathname === "/actions"? "white": "black"};"> Actions </a>
  <a href="/theme" style="background-color: {$page.url.pathname === "/theme"? "blue": "white"}; color: {$page.url.pathname === "/theme"? "white": "black"};"> Themes </a>
</div>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 200px;
    min-height: 100vh;
    gap: 4px;
    padding: 4px;
    background-color: #F0F0F0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1416d1;
    color: white;
    padding: 16px;
    border-radius: 4px;
    text-decoration: none;
  }
</style>
