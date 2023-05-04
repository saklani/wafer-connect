<script>
    import { disconnect } from "sveeeth";
</script>

<button class="disconnect" on:click={disconnect}> Disconnect </button>

<style>
    button.disconnect {
        background-color: rgb(232, 62, 62);
        color: white;
    }
</style>
