import Link from "next/link";
import { useRouter } from "next/router";
import MintForm from "./mintform";

export default function PageHome(props) {
  const router = useRouter();
  const { ref } = router.query;

  return (
    <div className="mx-auto px-4 lg:px-12 py-12 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 text-black">
      <div className="col-span-1">
        <h1 className="font-bold text-3xl lg:text-5xl">
          NFT <span className="text-themeBlue italic">"referral-to-earn"</span>{" "}
          protocol that reward you up to 436,900% per token.
        </h1>
        <p className="mt-4">
          Are you tired of shilling your favorite NFT project, hoping it to go
          to the moon? Are you fed up with all NFT projects that mainly benefit
          the project team? Be part of Project Sunrise, decentralized, contract
          verified and rug-proof. It runs autonomously, which will primarily
          reward the NFT owner.
        </p>
        <p className="mt-4">
          Read the project{" "}
          <Link
            className="font-bold text-themeBlue hover:underline"
            href={`/whitepaper${ref ? "?ref=" + ref : ""}`}
          >
            whitepaper.
          </Link>
        </p>
      </div>
      <div className="col-span-1">
        <MintForm />
      </div>
    </div>
  );
}
