import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "../context/appcontext";
import { MORALIS_API_ENDPOINT, NFT_CONTRACT } from "../constants";
import NFTCard from "./nftcard";
import { useRouter } from "next/router";

export default function NFTList(props) {
  const { account } = useAppContext();

  const router = useRouter();
  const { ref } = router.query;

  // Component state
  const [nfts, setNfts] = useState([]);
  const [total, setTotal] = useState(0);
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    getPageData("");
  }, [account]);

  async function getPageData(pageCursor) {
    if (!account) {
      setNfts([]);
      setTotal(0);
      return;
    }

    // Get nft owned from Moralis API
    let queryParam = {
      chain: "bsc",
      token_addresses: NFT_CONTRACT,
      limit: 10,
    };

    if (pageCursor) {
      queryParam = {
        ...queryParam,
        cursor: pageCursor,
      };
    }

    const response = await fetch(
      `${MORALIS_API_ENDPOINT}/${account}/nft?${new URLSearchParams(
        queryParam
      ).toString()}`,
      { method: "GET", headers: { "X-API-Key": process.env.MORALIS_API_KEY } }
    );

    // To confirm respond status is ok
    if (response.ok) {
      const data = await response.json();
      setNextPage(data.cursor);
      setTotal(data.total);
      nfts.push(...data.result);
    }
  }

  return (
    <div>
      <div className="flex items-center">
        <div className="flex-1 text-xl font-bold">My NFTs:</div>
        {/* {nfts.length > 0 && (
          <button className="py-2 px-6 border-4 border-black font-bold bg-white duration-100 hover:-translate-y-1 hover:bg-themeYellow">
            Redeem All
          </button>
        )} */}
      </div>

      {nfts.length <= 0 && (
        <div className="bg-gray-200 border-4 border-black border-dashed p-4 mt-6">
          No NFT owned. Earn rewards by being part of Project sunrise{" "}
          <Link
            className="font-bold hover:underline"
            href={`/${ref ? "?ref=" + ref : ""}`}
          >
            here
          </Link>
          .
        </div>
      )}

      {nfts.map((item) => {
        return (
          <div key={item.token_id}>
            <NFTCard nft={item} />
          </div>
        );
      })}

      {nfts.length < total && (
        <div className="flex mt-4 space-x-4 justify-end">
          <button
            className="py-2 px-6 bg-white duration-100 hover:-translate-y-1 hover:bg-themeYellow border-4 border-black font-bold"
            onClick={() => {
              getPageData(nextPage);
            }}
          >
            More..
          </button>
        </div>
      )}
    </div>
  );
}
