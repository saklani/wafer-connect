<script>
    import { disconnect } from "sveeeth";
    import { tick } from "svelte/internal";
</script>

<button
    on:click={async () => {
        await disconnect();
    }}
>
    Disconnect
</button>
