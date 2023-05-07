import browser from "$lib/images/browser.webp";
import coinbase from "$lib/images/coinbase.svg";
import metamask from "$lib/images/metamask.webp";
import rainbow from "$lib/images/rainbow.webp";
import trust from "$lib/images/trust.svg";
import walletConnect from "$lib/images/walletconnect.webp";

const MetaMask = {
	name: "MetaMask",
	icon: metamask,
	url: "https://metamask.io",
};

const Coinbase = {
	name: "Coinbase",
	icon: coinbase,
	url: "https://www.coinbase.com/wallet",
};

const Browser = {
	name: "Browser Wallet",
	icon: browser,
	url: "",
};

const WalletConnect = {
	name: "WalletConnect",
	icon: walletConnect,
	url: "",
};

const getInjectedPreset = (ethereum) => {
	if (ethereum === undefined) {
		return Browser;
	}
	if (ethereum.isMetaMask) {
		return MetaMask;
	}
	if (ethereum.isRainbow) {
		return {
			name: "Rainbow",
			icon: rainbow,
			url: "https://rainbow.me",
		};
	}
	if (ethereum.isTrust || ethereum.isTrustWallet) {
		return {
			name: "Trust",
			icon: trust,
			url: "https://trustwallet.com",
		};
	}
	return Browser;
};

export { Browser, Coinbase, MetaMask, WalletConnect, getInjectedPreset };
