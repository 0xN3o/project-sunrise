import Link from "next/link";
import { EXPLORER_URL, NFT_CONTRACT } from "../constants";
import { useRef, useRouter } from "next/router";

export default function WhitepaperPage(props) {
  const router = useRouter();
  const { ref } = router.query;

  return (
    <div className="mx-auto px-4 lg:px-12 py-12 max-w-7xl text-black">
      <h1 className="font-bold text-3xl lg:text-5xl">Whitepaper</h1>
      <div className="mt-10">
        <p className="mt-4 font-bold underline">A wake-up call</p>
        <p className="mt-4">
          Why most NFT projects are a high risk where only a small number of
          people will benefit from it. When a new NFT project launches, the
          focus is often on building a community around the project and
          positioning it as a brand with a promise of benefits for token
          holders.{" "}
        </p>
        <p className="mt-4">
          The community is often driven by a "pump and dump" strategy, where the
          goal is to make the project appear as desirable and inclusive as
          possible. So to get the most profit, buy in early, get a few NFTs, and
          sell it when the demand is high.
        </p>
        <p className="mt-4">
          The critical factors of the success of all NFT projects depend on the
          community decision (it can be a DAO) or the project founders
          themselves. However, there is still high demand for human factors
          where communitive influence is highly impacted towards the decision.
        </p>
        <p className="mt-4">
          Why can this be a programmable protocol where each participant can act
          as an individual actor but still benefit every participant?
        </p>
        <p className="mt-4">
          Introduce you to Project Sunrise. The protocol is built to allow every
          participant to earn in every market condition. This protocol is
          independent of a significant cumulative decision. Participants execute
          based on programmatically set requirements, and everyone will benefit.
        </p>
        <p className="mt-4">
          It eliminates the risk of dependence on the project owners and allows
          the protocol to operate autonomously for extended periods of time with
          minimal costs for minting new tokens. It opens up a lot of new
          possibilities and potential. This is the first NFT-based
          "refer-to-earn" that was introduced in the world.
        </p>
        <p className="mt-4">
          Satoshi came out with a brilliant whitepaper of the peer-to-peer
          monetary network. And with the concept of anonymity and long-term
          operability, we introduced an autonomous and decentralized NFT
          "refer-to-earn" protocol.
        </p>
      </div>
      <div className="mt-10">
        <p className="mt-4 font-bold underline">What is this project about?</p>
        <p className="mt-4">
          Project sunrise is a social experiment that is built on the blockchain
          to explore the concept of interconnectedness and how far a small
          action can ripple through a network of people. It also demonstrates
          the potential of blockchain technology to incentivize and reward
          individuals for participating in a network.
        </p>
        <p className="mt-4">
          Project Sunrise is not an investment. Use this service at your own
          risk.
        </p>
      </div>
      <div className="mt-10">
        <p className="mt-4 font-bold underline">How to get started?</p>
        <ul className="pl-6 mt-4 list-disc">
          <li className="mb-4">
            <span className="font-bold">MINT:</span> You are here because
            someone told you about this project. You should already obtain a
            referral number (NFT ID) by default. Mint a Project Sunrise NFT for
            0.15 BNB each{" "}
            <Link
              className="font-bold text-themeBlue hover:underline"
              href={`/${ref ? "?ref=" + ref : ""}`}
            >
              here
            </Link>
            . You can mint as many as you like.
          </li>
          <li className="mb-4">
            <span className="font-bold">REFER</span>: After minting, you'll
            receive an NFT, which will be displayed on the project{" "}
            <Link
              className="font-bold text-themeBlue hover:underline"
              href={`/dashboard${ref ? "?ref=" + ref : ""}`}
            >
              dashboard
            </Link>
            . NFT ID is your referral number. Use it for others to mint their
            NFTs so that you can expand your network.
          </li>
          <li>
            <span className="font-bold">GET REWARDED</span>: If your referral
            mints an NFT, you'll instantly be rewarded for your effort. You will
            also consistently receive rewards when your network grows.
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <p className="mt-4 font-bold underline">
          How are rewards being calculated?
        </p>
        <p className="mt-4">
          NFT minted act as a pass or a membership to obtain a referral id which
          can later be used to mint more NFTs. Each NFT costs 0.15 BNB, and the
          amount collected will be added to a pool that is distributed as a
          reward to the earlier participant. In addition, this project does not
          collect any fees.
        </p>
        <ul className="pl-6 mt-4 list-disc">
          <li className="mb-4">
            <span className="font-bold">Rewards distribution fundamentals</span>
            : For each NFT to be allowed to withdraw their rewards,{" "}
            <span className="font-bold">
              two NFTs must be minted under its referral
            </span>
            . This rule is set so that the network continuously expands and
            indirectly benefits all participants.
          </li>
          <li>
            <span className="font-bold">
              What if my referral is used more than twice?
            </span>
            : If your referral is used more than twice, the newly minted NFT
            will be allocated to the below hierarchy prioritizing any NFT that
            still does not meet the referral requirement.
          </li>
        </ul>
        <p className="mt-4">
          Note: Review smart contract code{" "}
          <Link
            className="font-bold text-themeBlue hover:underline"
            href={`${EXPLORER_URL}/token/${NFT_CONTRACT}#code`}
            target="_blank"
            rel="noreferrer"
          >
            here
          </Link>
          .
        </p>
        <p className="mt-4">
          The protocol incentivizes earlier friends for each referral made. The
          incentive is 0.01 BNB per person referred, up to a maximum of 15 tiers
          lower.
        </p>
        <p className="mt-4">
          The person who initially purchased the NFT can earn a maximum reward
          of 0.01 BNB for each person referred by their two friends, and so on,
          up to 15 tiers lower.
        </p>
      </div>
      <div className="mt-10">
        <p className="mt-4 font-bold underline">Maximum earnings per NFT</p>
        <p className="mt-4">
          The estimated maximum reward for the person who initially purchased an
          NFT is about 655 BNB. This is calculated by adding the maximum
          possible referral reward of 0.01 BNB per person, up to 15 tiers lower.
          Therefore, the total number of NFTs minted is:
        </p>
        <ul className="pl-6 mt-4 list-disc">
          <li>number_of_nft_below = (2 powOf 16) - 2 = 65,534</li>
          <li>
            rewards = number_of_nft_below x rewards_per_nfts = 65,534 x 0.01 =
            655.34 BNB
          </li>
          <li>
            Each mint of 0.15 BNB has maximum potential earnings of 655.34 BNB
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <p className="mt-4 font-bold underline">Conclusion</p>
        <p className="mt-4">
          Project Sunrise smart contract is deployed on the BNB Chain, which
          uses BNB cryptocurrency, one of the top 5 cryptocurrencies by market
          cap. The contract is verified and open for everyone to review. Every
          single BNB collected from each holder is given back to the holder
          before as a referral incentive. There is no centralized organization,
          person or company that governs the process. It is a fully autonomous
          and decentralized protocol without enriching anyone in particular.
        </p>
        <p className="mt-4">
          This social experiment is a creative way to study human behavior and
          the power of social networks. It also showcases the potential of
          blockchain technology in creating new incentives and reward systems.
          This experiment is a perfect example of how blockchain technology can
          be used to drive social change and create new opportunities for
          individuals.
        </p>
      </div>
    </div>
  );
}
