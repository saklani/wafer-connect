<script>
  import { fade } from "svelte/transition";
  import { shortAddress } from "../utils.js";
  import Address from "./Common/Address.svelte";
  import Avatar from "./Common/Avatar.svelte";
  import Disconnect from "./Common/Disconnect.svelte";
  import ModalBox from "./Common/ModalBox.svelte";

  let showModal = false;

  const handleClick = () => (showModal = true);
  /** @type {`0x{string}`}  */
  export let address;
</script>

<button
  in:fade={{ delay: 300 }}
  out:fade={{ duration: 400 }}
  class="black row align gap padding-inline"
  on:click={handleClick}
>
  <Avatar {address} radius={"26px"} />
  {shortAddress(address)}
</button>

<ModalBox title={"Connected"} bind:showModal>
  <Avatar {address} />
  <Address {address} />
  <Disconnect />
</ModalBox>
