const MAX_ADDRESS_LENGTH = 4;

/** @param  {number} milliseconds */
function sleep(milliseconds) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/** @param  {string} address */
function shortAddress(address) {
    return `${address.substring(0, MAX_ADDRESS_LENGTH)}••••${address.substring(address.length - MAX_ADDRESS_LENGTH, address.length)}`;
   
}

export { shortAddress, sleep };