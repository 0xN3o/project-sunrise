import { BASE_URL } from "../../../components/constants";
export default function handler(req, res) {
  const { tokenId } = req.query;

  if (req.method === "GET") {
    // Construct data
    const data = {
      name: `Project Sunrise Pass #${tokenId}`,
      image: `${BASE_URL}/assets/nft.svg`,
      attributes: [
        { trait_type: "token_id", value: `#${tokenId}` },
        { trait_type: "type", value: "Referral Pass" },
      ],
      description:
        "An awesome NFT referral-to-earn protocol that could reward you up to 436,900% per token. Project Sunrise is a decentralized, contract-verified, autonomous protocol that primarily rewards NFT owners. For more info, visit https://projectsunrise.net",
    };

    res.status(200).json(data);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
