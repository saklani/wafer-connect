<script>
  import { account } from "sveeeth";
  import { shortAddress } from "../utils.js";
  import Address from "./Common/Address.svelte";
  import Disconnect from "./Common/Disconnect.svelte";
  import ModalBox from "./Common/ModalBox.svelte";

  let showModal = false;

  const handleClick = () => (showModal = true);
</script>

<button class="black" on:click={handleClick}>
  {shortAddress($account.address)}
</button>

<ModalBox title={"Connected"} bind:showModal>
  <Address />
  <Disconnect />
</ModalBox>
