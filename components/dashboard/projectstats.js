import {
  DocumentPlusIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appcontext";

export default function ProjectStats(props) {
  const { web3, contract } = useAppContext();

  // Component state
  const [totalSupply, setTotalSupply] = useState("Loading..");
  const [totalWithdrawn, setTotalWithdrawn] = useState("Loading..");

  useEffect(() => {
    getPageData();
  });

  async function getPageData() {
    if (!contract) {
      return;
    }

    // Get NFT minted
    setTotalSupply(await contract.methods.totalSupply().call());

    // Get total rewards collected
    setTotalWithdrawn(
      parseFloat(
        web3.utils.fromWei(
          await contract.methods.totalWithdrawn().call(),
          "ether"
        )
      ).toFixed(2) + " BNB"
    );
  }

  return (
    <div className="bg-gray-200 border-4 border-black p-4 flex flex-col gap-4">
      <div className="flex-1 inline-flex gap-4">
        <div className="bg-white rounded-full p-2 my-auto">
          <DocumentPlusIcon className="w-6 h-6" />
        </div>
        <div className="my-auto">
          <p className="text-sm">Current project supply</p>
          <p className="text-xl font-bold">{totalSupply}</p>
        </div>
      </div>
      <div className="flex-1 inline-flex gap-4">
        <div className="bg-white rounded-full p-2 my-auto">
          <CurrencyDollarIcon className="w-6 h-6" />
        </div>
        <div className="my-auto">
          <p className="text-sm">Project rewards withdrawn</p>
          <p className="text-xl font-bold">{totalWithdrawn}</p>
        </div>
      </div>
    </div>
  );
}
