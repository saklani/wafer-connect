import browser from "../images/browser.webp";
import metamask from "../images/metamask.webp";
import walletConnect from "../images/walletconnect.webp";

const MetaMask = {
	ariaLabel: "Connect using MetaMask",
	name: "MetaMask",
	icon: metamask,
	url: "https://metamask.io",
};

const Injected = {
	ariaLabel: "Connect using Injected wallet",
	name: "Browser Wallet",
	icon: browser,
	url: "https://ethereum.org/wallets/",
};

const WalletConnect = {
	ariaLabel: "Connect using WalletConnect",
	name: "WalletConnect",
	icon: walletConnect,
	url: "https://walletconnect.com/",
};

export { Injected, MetaMask, WalletConnect };
