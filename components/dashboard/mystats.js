import {
  DocumentPlusIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appcontext";

export default function MyStats(props) {
  const { web3, contract, account } = useAppContext();

  // Component state
  const [nftOwned, setNftOwned] = useState("Loading..");
  const [rewards, setRewards] = useState("Loading..");

  useEffect(() => {
    getPageData();
  });

  async function getPageData() {
    if (!account) {
      return;
    }

    // Get NFT Owned
    setNftOwned(await contract.methods.balanceOf(account).call());

    // Get rewards withdrawn
    setRewards(
      parseFloat(
        web3.utils.fromWei(
          await contract.methods.withdrawnByAddress(account).call(),
          "ether"
        )
      ).toFixed(2) + " BNB"
    );
  }

  return (
    <div className="col-span-1 bg-themeYellow border-4 border-black p-4 flex flex-col gap-4">
      <div className="flex-1 inline-flex gap-4">
        <div className="bg-white rounded-full p-2 my-auto">
          <DocumentPlusIcon className="w-6 h-6" />
        </div>
        <div className="my-auto">
          <p className="text-sm">NFT owned</p>
          <p className="text-xl font-bold">{nftOwned}</p>
        </div>
      </div>
      <div className="flex-1 inline-flex gap-4">
        <div className="bg-white rounded-full p-2 my-auto">
          <CurrencyDollarIcon className="w-6 h-6" />
        </div>
        <div className="my-auto">
          <p className="text-sm">Rewards withdrawn</p>
          <p className="text-xl font-bold">{rewards}</p>
        </div>
      </div>
    </div>
  );
}
