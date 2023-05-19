<script>
  /** @type {boolean} */
  export let showMenu;

  /** @type {HTMLDialogElement} */
  let dialog;

  $: if (dialog) showMenu ? dialog.showModal() : dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:close={() => (showMenu = false)}
  on:click|self={() => dialog.close()}
>
  <div
    style="display: flex; flex-direction: column; gap: 0.8rem; width: 100%;"
    on:click|stopPropagation
  >
    <div
      style="align-items: center; display: flex; justify-content: space-between; gap: 0.5rem; padding-bottom: 1rem;"
    >
      <slot name="title" />
    </div>
    <slot />
  </div>
</dialog>

<style>
  :root {
    --menu-background-color: white;
    --menu-color: black;
    --border-radius: 4px;
  }

  dialog {
    background-color: var(--menu-background-color);
    border: none;
    border-radius: var(--border-radius);
    color: var(--menu-color);
    left: 10px;
    max-width: 200px;
    padding: 24px;
    position: relative;
    top: -100px;
    width: 100%;
  }

  dialog::backdrop {
    background: none;
  }
</style>
