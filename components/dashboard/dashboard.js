import MyStats from "./mystats";
import ProjectStats from "./projectstats";
import Rankings from "./rankings";
import NFTList from "./nftlist";
import { useAppContext } from "../context/appcontext";

export default function Dashboard(props) {
  const { account } = useAppContext();
  return (
    <div className="mx-auto px-4 lg:px-12 py-12 max-w-7xl text-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 lg:col-span-3">
          <h1 className="font-bold text-3xl lg:text-5xl">Dashboard</h1>
          <p className="mt-4">
            The dashboard shows you the statistics of the entire project and
            information about your earnings, and a list of NFTs. Redeem your
            rewards by clicking the "Redeem" button in the NFT list. If "Redeem"
            is unavailable, it can be either no rewards available or the
            referral does not meet the minimum requirement (Min referral
            requirement is 2).
          </p>
        </div>
        {account && (
          <>
            <ProjectStats className="col-span-2" />
            {/* <Rankings /> */}
            <MyStats />
          </>
        )}
        {!account && (
          <div className="bg-gray-200 border-4 border-black border-dashed p-4">
            Please connect your wallet to view the dashboard info.
          </div>
        )}
      </div>
      <div className="mt-6">
        Note: Most of the information shown on this page is on-chain data.
        Performance is subject to RPC service availability.
      </div>
      <div className="mt-6">
        <NFTList />
      </div>
    </div>
  );
}
