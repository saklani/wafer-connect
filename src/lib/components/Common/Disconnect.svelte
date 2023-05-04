<script>
    import { disconnect } from "sveeeth";
    let backgroundColor = "#DC3F3F";
    let color = "#FFFFFF";

    export { backgroundColor, color };
</script>

<button
    style="background-color: {backgroundColor}; color: {color};"
    on:click={disconnect}
>
    Disconnect
</button>
