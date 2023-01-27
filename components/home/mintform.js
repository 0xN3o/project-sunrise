import { FireIcon } from "@heroicons/react/24/solid";
import { LinkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRef, useState } from "react";
import { useAppContext } from "../context/appcontext";
import { trimAddress } from "../helper";
import { EXPLORER_URL, NFT_CONTRACT } from "../constants";
import { useRouter } from "next/router";

export default function MintForm(props) {
  // Application wide context
  const { web3, contract, account, appModal, setAppModal } = useAppContext();

  // To grab referral
  const router = useRouter();
  const { ref } = router.query;

  // To grab input from form
  const referralRef = useRef();
  const qtyRef = useRef();

  // State
  const [totalPrice, setTotalPrice] = useState(0.15);

  function qtyChange(event) {
    const total = event.target.value * 0.15;
    setTotalPrice(total);
  }

  function formSubmit(event) {
    event.preventDefault(); // To prevent browser action to refresh page

    if (!account) {
      // Wallet is not connected
      setAppModal({
        ...appModal,
        show: true,
        title: "Opps..",
        description: "Wallet is not connected.",
      });
      return;
    }

    setAppModal({
      ...appModal,
      show: true,
      type: "progress",
      title: "Minting",
      description: "Please provide approval in your wallet.",
    });

    // Mint unique 1 of 1 token
    contract.methods
      .safeMint(referralRef.current.value, qtyRef.current.value)
      .send({
        from: account,
        value: web3.utils.toWei(totalPrice.toFixed(2), "ether"),
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
          description:
            "Mint success. Your NFT will be available in Dashboard once block confirmation is received.",
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

  return (
    <div className="w-full mx-auto max-w-lg">
      Bring it ON; #ProjectSunrise is awesome!
      <form
        className="mt-2 bg-themeRed border-black border-4 p-4"
        onSubmit={formSubmit}
      >
        {/* Referal */}
        <div className="pb-6">
          <label className="text-xl font-bold" htmlFor="nft-id-ref">
            Referral number (NFT ID):
          </label>
          <p>
            The referral number is ERC-721 token ID. It is provided to you by
            your invitee.
          </p>
          <div className="mt-2 flex">
            <input
              type="number"
              id="nft-id-ref"
              ref={referralRef}
              className="flex-1 text-xl p-2 border-4 border-black border-dashed"
              min={100000}
              value={ref}
              readOnly={ref ? "readonly" : ""}
              placeholder="100000"
              required
            />
          </div>
        </div>
        {/* Qty */}
        <div className="pb-6">
          <label className="text-xl font-bold" htmlFor="nft-id-ref">
            Quantity:
          </label>
          <p>Quantity of NFTs you wish to mint. The minimum quantity is 1.</p>
          <div className="mt-2 flex">
            <input
              type="number"
              id="nft-id-ref"
              ref={qtyRef}
              className="flex-1 text-xl p-2 border-4 border-black border-dashed"
              min={1}
              max={16}
              placeholder="1"
              onChange={qtyChange}
              required
            />
          </div>
        </div>
        {/* Summary */}
        <div className="pt-6 pb-6 border-t-2 border-black border-dashed">
          <p>NFT Name:</p>
          <p className="font-bold">Project Sunrise Pass</p>
          <p className="pt-2">NFT Contract:</p>
          <Link
            className="font-bold flex flex-inline items-center hover:underline"
            href={`${EXPLORER_URL}/token/${NFT_CONTRACT}`}
            target="_blank"
            rel="noreferrer"
          >
            {trimAddress(NFT_CONTRACT)} <LinkIcon className="w-4 ml-1" />
          </Link>
          <div className="pt-6 grid grid-cols-2">
            <p className="my-auto">Per unit mint price:</p>
            <p className="font-bold">0.15 BNB</p>
            <p className="my-auto">Total price:</p>
            <p className="font-bold">{totalPrice.toFixed(2)} BNB</p>
          </div>
        </div>
        {/* T&C */}
        {/* <div className="flex items-center pb-6">
          <div className="">
            <input
              id="terms-and-condition"
              type="checkbox"
              className="w-5 h-5"
              required
            />
          </div>
          <div className="pl-4">
            <label htmlFor="terms-and-condition" className="">
              I agree to the{" "}
              <a className="font-bold hover:underline" href="#" target="_blank">
                Terms and Conditions
              </a>
              .
            </label>
          </div>
        </div> */}
        {/* Mint button */}
        <button
          type="submit"
          className="p-2 w-full border-4 border-black bg-white duration-100 hover:bg-themeYellow hover:-translate-y-1"
        >
          <div className="pt-1">
            <p className="inline-flex text-xl font-bold ">
              <FireIcon className="w-6 h-6 mr-2" />
              Mint NFT
            </p>
            <p className="text-md">Let{"'"}s go. This is stonks!</p>
          </div>
        </button>
      </form>
    </div>
  );
}
