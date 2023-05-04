<script>
    import Modal from "./Modal.svelte";

    /** @type {string} */
    let title;

    /** @type {boolean} */
    let showModal = false;

    export { showModal, title };
</script>

<Modal bind:showModal>
    <div
        class="column padding gap"
        style="background-color: rgba(245, 245, 245, 0.8); backdrop-filter: blur(4px);"
    >
        <h3>{title}</h3>
        <slot />
    </div>
</Modal>
