<script>
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
    style="display: flex; flex-direction: column; gap: 0.8rem; width: 100%;"
    on:click|stopPropagation
  >
    <div
      style="align-items: center; display: flex; justify-content: space-between; gap: 0.5rem; padding-bottom: 1rem;"
    >
      <slot name="title" />
      <svg
        style="cursor: pointer;"
        width="24"
        height="23"
        viewBox="0 0 24 23"
        on:click={() => (showDialog = false)}
      >
        <path
          d="M17.4829 5.86792L6.1692 17.1816"
          stroke="var(--wafer-dialog-text-color)"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M6.15088 5.84937L17.4646 17.1631"
          stroke="var(--wafer-dialog-text-color)"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <slot />
  </div>
</dialog>

<style>
  dialog {
    backdrop-filter: var(--wafer-dialog-blur);
    background-color: var(--wafer-dialog-background-color);
    border: none;
    border-radius: var(--wafer-border-radius);
    color: var(--wafer-dialog-text-color);
    max-width: 314px;
    padding: 1rem;
    width: 100%;
    z-index: -1;
  }

  dialog::backdrop {
    backdrop-filter: blur(1px);
  }

  dialog[open] {
    animation: zoom 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  dialog[open]::backdrop {
    animation: fade 0.3s ease-out;
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
