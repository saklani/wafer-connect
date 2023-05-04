<script>
    /** @type {boolean} */
    export let showModal; 

    /** @type {HTMLDialogElement} */
    let dialog;

    $: if (dialog) showModal ? dialog.showModal() : dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <div on:click|stopPropagation>
        <slot />
    </div>
</dialog>
