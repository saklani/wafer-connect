<script>
  import cross from "../../images/cross.svg";
  /** @type {boolean} */
  export let showDialog;

  /** @type {HTMLDialogElement} */
  let dialog;

  $: if (dialog) showDialog ? dialog.showModal() : dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:close={() => (showDialog = false)}
  on:click|self={() => dialog.close()}
>
  <div
    style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;"
    on:click|stopPropagation
  >
    <div
      style="align-items: center; display: flex; justify-content: space-between; gap: 0.5rem;"
    >
      <slot name="title" />
      <button
        style="padding: 4px; width: 32px; height: 32px;"
        on:click={() => (showDialog = false)}
      >
        <img src={cross} alt="close" style="width: 24px; height: 24px;" />
      </button>
    </div>
    <slot />
  </div>
</dialog>

<style>
  dialog {
    backdrop-filter: var(--blur, blur(4px));
    background-color: var(--dialog-background-color, rgba(245, 245, 245, 0.8));
    border: none;
    border-radius: var(--border-radius, 4px);
    max-width: var(--max-width, 325px);
    padding: 1rem;
    width: 100%;
  }

  dialog::backdrop {
    backdrop-filter: var(--backdrop-blur, blur(1px));
  }

  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }

    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
