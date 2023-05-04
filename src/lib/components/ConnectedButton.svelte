<script>
  import { account } from "sveeeth";
  import { shortAddress } from "../utils.js";
  import Address from "./Common/Address.svelte";
  import Avatar from "./Common/Avatar.svelte";
  import Disconnect from "./Common/Disconnect.svelte";
  import ModalBox from "./Common/ModalBox.svelte";

  let showModal = false;

  const handleClick = () => (showModal = true);
</script>

<button class="black row align gap padding-inline" on:click={handleClick}>
  <Avatar radius={"26px"} />
  {shortAddress($account.address)}
</button>

<ModalBox title={"Connected"} bind:showModal>
  <Avatar />
  <Address />
  <Disconnect />
</ModalBox>
