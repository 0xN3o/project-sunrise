import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Project Sunrise",
      rpc: "https://bsc-dataseed1.binance.org",
      chainId: 56, // Optional. It defaults to 1 if not provided
    },
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        56: "https://bsc-dataseed1.binance.org",
      },
    },
  },
  binancechainwallet: {
    package: true,
  },
};
