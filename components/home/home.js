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
          <span className="text-themeBlue italic">"Refer-to-earn"</span> your
          way to collective ownership with Project Sunrise
        </h1>
        <p className="mt-4">
          Project Sunrise is a one-of-a-kind social experiment protocol that
          uses NFTs as a tool to build the single, largest owners in DeFi
          eco-system and be rewarded as we go. It is decentralized, contract
          verified, and autonomous. No floor price, no mods, no pump, nor rugs,
          no co-founder, and no discord. It incentivizes you, not us.
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
