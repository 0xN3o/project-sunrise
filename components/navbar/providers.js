import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Project Sunrise",
      rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97, // Optional. It defaults to 1 if not provided
    },
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      },
    },
  },
  binancechainwallet: {
    package: true,
  },
};
