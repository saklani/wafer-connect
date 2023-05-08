const MAX_ADDRESS_LENGTH = 4;

/** @param  {number} milliseconds */
function sleep(milliseconds) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/** @param  {string} address */
function shortAddress(address) {
	const length = address.length;
	return `${address.substring(0, MAX_ADDRESS_LENGTH)}••••${address.substring(
		length - MAX_ADDRESS_LENGTH,
		length,
	)}`;
}

/**
 * Source: https://github.com/rainbow-me/rainbowkit
 */
const units = ["k", "m", "b", "t"];

function toPrecision(number, precision = 1) {
	return number
		.toString()
		.replace(new RegExp(`(.+\\.\\d{${precision}})\\d+`), "$1")
		.replace(/(\.[1-9]*)0+$/, "$1")
		.replace(/\.$/, "");
}

function abbreviateETHBalance(number) {
	if (number < 1) return toPrecision(number, 3);
	if (number < 10 ** 2) return toPrecision(number, 2);
	if (number < 10 ** 4)
		return new Intl.NumberFormat().format(parseFloat(toPrecision(number, 1)));

	const decimalsDivisor = 10 ** 1; // 1 decimal place

	let result = String(number);

	for (let i = units.length - 1; i >= 0; i--) {
		const size = 10 ** ((i + 1) * 3);

		if (size <= number) {
			number = (number * decimalsDivisor) / size / decimalsDivisor;

			result = toPrecision(number, 1) + units[i];

			break;
		}
	}

	return result;
}

export { shortAddress, sleep, toPrecision, abbreviateETHBalance };
