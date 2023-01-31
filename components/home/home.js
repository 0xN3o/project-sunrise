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
          NFT <span className="text-themeBlue italic">"refer-to-earn"</span>{" "}
          protocol that rewards you up to 436,900% per token.
        </h1>
        <p className="mt-4">
          Hey, shilling NFT projects is tiring. We get it. How often have you
          degen to an NFT project, hoping it goes to the moon, only to be rugged
          by the team?
        </p>
        <p className="mt-2">
          It's time for a change. Project Sunrise is a decentralized,
          contract-verified, autonomous program that prioritizes rewards for the
          NFT owners (that's you), not us.
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
