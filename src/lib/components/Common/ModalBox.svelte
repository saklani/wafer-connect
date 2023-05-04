<script>
    import Modal from "./Modal.svelte";

    /** @type {string} */
    let title;

    /** @type {boolean} */
    let showModal = false;

    export { showModal, title };
</script>

<Modal bind:showModal>
    <div class="connect-box column padding gap">
        <h3>{title}</h3>
        <slot />
    </div>
</Modal>

<style>
    .connect-box {
        background-color: whitesmoke;
    }
</style>
