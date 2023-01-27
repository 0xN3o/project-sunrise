import { useAppContext } from "../context/appcontext";
import Web3Modal from "web3modal";
import { providerOptions } from "./providers";
import { trimAddress } from "../helper";
import nftContract from "../../contracts/artifacts/SunriseNFT.json";
import { BNB_CHAIN_NETWORK_ID, NFT_CONTRACT } from "../constants";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function WalletButton(props) {
  // Application wide context
  const {
    web3,
    setWeb3,
    setContract,
    account,
    setAccount,
    appModal,
    setAppModal,
  } = useAppContext();

  let web3Modal;
  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });
  }

  useEffect(() => {
    // Check if previous session is connected
    if (Cookies.get("acc_connected") && !account) {
      connectWallet();
    }
  }, []);

  function flushSession() {
    // To allow user to choose type of wallet for BNB
    web3Modal.clearCachedProvider();

    // Logout
    setAccount(null);
    Cookies.remove("acc_connected");
  }

  async function connectWallet() {
    if (account) {
      // Wallet is already connected, execute logout
      flushSession();
      return;
    }

    try {
      if (!web3) {
        let provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        // Check for BNB Chain network
        const networkId = await web3.eth.net.getId();
        if (networkId == BNB_CHAIN_NETWORK_ID) {
          setWeb3(web3);
          setContract(new web3.eth.Contract(nftContract.abi, NFT_CONTRACT));

          // Subscribe to accounts change
          provider.on("accountsChanged", (accounts) => {
            setWeb3(null);
            flushSession();
          });

          // Subscribe to chainId change
          provider.on("chainChanged", (chainId) => {});

          // Subscribe to provider connection
          provider.on("connect", (info) => {});

          // Subscribe to provider disconnection
          provider.on("disconnect", (error) => {
            setWeb3(null);
            flushSession();
          });

          const w3Accs = await web3.eth.getAccounts();
          setAccount(w3Accs[0]); // Always select the first account

          Cookies.set("acc_connected", true);
        } else {
          // BNB network is not selected
          setAppModal({
            ...appModal,
            show: true,
            title: "Opps..",
            description:
              "BNB Chain is not selected. Instead, please choose BNB Chain in your wallet.",
          });
        }
      } else {
        const w3Accs = await web3.eth.getAccounts();
        setAccount(w3Accs[0]); // Always select the first account
      }
    } catch (error) {
      // No further action
    }
  }

  return (
    <button
      className="p-2 bg-white font-bold border-4 border-black duration-100 hover:-translate-y-1 hover:bg-themeYellow"
      onClick={connectWallet}
    >
      <span className="text-black">
        {account ? trimAddress(account) : "Connect wallet"}
      </span>
      <p className="text-black text-xs">
        {account ? "(Disconnect)" : "(BNB Chain)"}
      </p>
    </button>
  );
}
