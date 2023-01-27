import { CubeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appcontext";
import { EXPLORER_URL, NFT_CONTRACT, BASE_URL } from "../constants";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";

export default function NFTCard(props) {
  const { web3, contract, account, appModal, setAppModal } = useAppContext();
  const { nft } = props;

  const [referralUse, setReferralUse] = useState("Loading..");
  const [totalRewards, setTotalRewards] = useState("Loading..");
  const [available, setAvailable] = useState("Loading..");
  const [allowRedeem, setAllowRedeem] = useState(false);

  useEffect(() => {
    getOnChainData();
  });

  async function getOnChainData() {
    const _available = parseFloat(
      web3.utils.fromWei(
        await contract.methods.availableRewards(parseInt(nft.token_id)).call(),
        "ether"
      )
    );
    setAvailable(_available.toFixed(2));

    const _totalRewards = parseFloat(
      web3.utils.fromWei(
        await contract.methods.totalRewards(parseInt(nft.token_id)).call(),
        "ether"
      )
    );
    setTotalRewards(_totalRewards.toFixed(2));

    const _referralUse = await contract.methods
      .referralTree(parseInt(nft.token_id))
      .call();
    setReferralUse(`${_referralUse.length} of 2`);

    setAllowRedeem(_available > 0 && _referralUse.length > 1);
  }

  async function redeem() {
    contract.methods
      .redeem(parseInt(nft.token_id))
      .send({
        from: account,
      })
      .on("confirmation", (confirmation, receipt, latestBlockHash) => {
        // No further action
      })
      .on("transactionHash", async (transactionHash) => {
        // Show success message
        setAppModal({
          ...appModal,
          show: true,
          type: "dialog",
          title: "Success",
          description: "Redeem success.",
        });
      })
      .on("receipt", (receipt) => {
        // No further action
      })
      .on("error", (error) => {
        setAppModal({
          ...appModal,
          show: true,
          type: "dialog",
          title: "Opps..",
          description: error.message,
        });
      });
  }

  async function clipboardClicked() {
    // Copy to clipboard
    const url = `${BASE_URL}?ref=${nft.token_id}`;
    await navigator.clipboard.writeText(url);

    setAppModal({
      ...appModal,
      show: true,
      type: "dialog",
      title: "Referral copied",
      description: "The referral link is copied to the clipboard.",
    });
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-4 p-4 bg-themeOrange border-black border-4">
      <div className="flex flex-1 items-center gap-4">
        <div className="bg-white rounded-full p-2">
          <CubeIcon className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm">NFT ID (Referral no.)</p>
          <Link
            className="text-xl font-bold hover:underline"
            href={`${EXPLORER_URL}/token/${NFT_CONTRACT}?a=${nft.token_id}`}
            target="_blank"
            rel="noreferrer"
          >
            {nft.token_id}
          </Link>
          <button className="p-2" onClick={clipboardClicked}>
            <ClipboardDocumentIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <p className="text-sm">Referral use</p>
          <p className="text-xl font-bold">{referralUse}</p>
        </div>
        <div>
          <p className="text-sm">Rewards (BNB)</p>
          <p className="text-xl font-bold">{totalRewards}</p>
        </div>
        <div>
          <p className="text-sm">Available (BNB)</p>
          <p className="text-xl font-bold">{available}</p>
        </div>
      </div>
      {allowRedeem && (
        <button
          className="py-2 px-6 bg-white duration-100 hover:-translate-y-1 hover:bg-themeYellow border-4 border-black font-bold"
          onClick={redeem}
        >
          Redeem
        </button>
      )}
      {!allowRedeem && (
        <div className="py-2 px-6 bg-white border-4 border-black border-dashed font-bold opacity-25">
          Redeem
        </div>
      )}
    </div>
  );
}
