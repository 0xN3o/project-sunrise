import Link from "next/link";
import { useRouter } from "next/router";
import { EXPLORER_URL, NFT_CONTRACT } from "../constants";

export default function ProductDetails(props) {
  const router = useRouter();
  const { ref } = router.query;

  return (
    <div className="mx-auto px-4 lg:px-12 py-12 max-w-7xl">
      <h2 className="font-bold text-2xl lg:text-4xl text-black pb-12 text-center">
        Why this is awesome?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black text-sm lg:text-base">
        <div className="col-span-1 bg-themeYellow border-4 border-black p-6">
          <h2 className="font-bold border-b-2 border-black border-dashed pb-4">
            Autonomous, it runs on its own.
          </h2>
          <p className="mt-4">
            This project requires no admin or supervision. The contract is
            deployed on the blockchain. It incentivizes you when you are part of
            the network. The bigger your network grows, the more things you can
            do as a collective. It’s up to your creativity!
          </p>
        </div>
        {/* <div className="col-span-1 bg-themeYellow border-4 border-black p-6">
          <h2 className="font-bold border-b-2 border-black border-dashed pb-4">
            Unstoppable, hosted in IPFS.
          </h2>
          <p className="mt-4">
            Frontend services are hosted in IPFS, and everyone can pin its
            content. Therefore, we encourage you to contribute to the frontend
            service by pinning it to your IPFS account.
          </p>
        </div> */}
        <div className="col-span-1 bg-themeYellow border-4 border-black p-6">
          <h2 className="font-bold border-b-2 border-black border-dashed pb-4">
            Fair incentives distributions.
          </h2>
          <p className="mt-4">
            You will be incentivized if your network expands.{" "}
            <span className="font-bold italic">
              Each NFT requires a minimum of 2 referral activations before you
              can redeem
            </span>
            . That's it. Once 2 referral activation is complete, subsequent
            users who use your referral will be auto-assigned to those under
            your network accordingly. And everyone will have a fair chance to
            get incentives.
          </p>
        </div>
        <div className="col-span-1 bg-themeYellow border-4 border-black p-6">
          <h2 className="font-bold border-b-2 border-black border-dashed pb-4">
            Trust the code, not us.
          </h2>
          <p className="mt-4">
            Smart-Contract of this service is verified and can be viewed{" "}
            <Link
              className="font-bold hover:underline"
              href={`${EXPLORER_URL}/token/${NFT_CONTRACT}#code`}
              target="_blank"
              rel="noreferrer"
            >
              here
            </Link>
            . The rule is to trust the code and review it yourself. Those who
            manage to expand their network will get the most rewards. Not us.
          </p>
        </div>
      </div>
      <div className="py-12 text-center text-black">
        <h3 className="font-bold text-2xl lg:text-4xl">
          Why Project Sunrise is different?
        </h3>
        <table className="mt-12 bg-gray-200 mx-auto table-auto divide-y-4 divide-white text-sm lg:text-base">
          <thead>
            <tr>
              <th className="px-2 lg:px-6 py-3"></th>
              <th className="px-2 lg:px-6 py-3">Typical NFT Project</th>
              <th className="px-2 lg:px-6 py-3">Project Sunrise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dashed divide-white">
            <tr>
              <td className="px-2 lg:px-6 py-3 font-bold">
                Who gets the most benefit if you promote the project?
              </td>
              <td className="px-2 lg:px-6 py-3">Project owner.</td>
              <td className="px-2 lg:px-6 py-3">
                You. You earn by expanding your network.
              </td>
            </tr>
            <tr>
              <td className="px-2 lg:px-6 py-3 font-bold">Chance of rugged?</td>
              <td className="px-2 lg:px-6 py-3">
                High risk. Heavily rely on the project team.
              </td>
              <td className="px-2 lg:px-6 py-3">
                No admin in control. Autonomous, decentralized.
              </td>
            </tr>
            <tr>
              <td className="px-2 lg:px-6 py-3 font-bold">How do you earn?</td>
              <td className="px-2 lg:px-6 py-3">Buy low, sell high.</td>
              <td className="px-2 lg:px-6 py-3">
                User mint with your referral.
              </td>
            </tr>
            <tr>
              <td className="px-2 lg:px-6 py-3 font-bold">
                How big is the community?
              </td>
              <td className="px-2 lg:px-6 py-3">
                NFT owners. It is limited to project supply.
              </td>
              <td className="px-2 lg:px-6 py-3">Unlimited and growing.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-12 py-12 text-center">
        <h3 className="font-bold text-2xl lg:text-4xl text-black">
          Join us as we explore the power of interconnectedness through
          blockchain technology. Mint, obtain your referral and let your network
          grow.
        </h3>
        <p className="text-black pt-2">
          To understand how this works, read the project{" "}
          <Link
            className="font-bold text-themeBlue hover:underline"
            href={`/whitepaper${ref ? "?ref=" + ref : ""}`}
          >
            whitepaper
          </Link>
        </p>
      </div>
    </div>
  );
}
