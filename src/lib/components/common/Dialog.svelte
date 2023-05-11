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
    style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;"
    on:click|stopPropagation
  >
    <div
      style="align-items: center; display: flex; justify-content: space-between; gap: 0.5rem;"
    >
      <slot name="title" />
      <svg
        on:click={() => (showDialog = false)}
        width="41"
        height="41"
      >
        <path
          d="M30.225 10.64 10.426 30.437M10.394 10.607l19.798 19.799"
          stroke="var(--dialog-color)"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <slot />
  </div>
</dialog>

<style>
  :root {
    --dialog-background-color: rgba(245, 245, 245, 0.8);
    --dialog-color: black;
    --border-radius: 4px;
    --max-width: 325px;
  }

  dialog {
    backdrop-filter: var(--dialog-blur);
    background-color: var(--dialog-background-color);
    border: none;
    border-radius: var(--border-radius);
    color: var(--dialog-color);
    max-width: var(--max-width);
    padding: 1rem;
    width: 100%;
  }

  dialog::backdrop {
    backdrop-filter: blur(1px);
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
