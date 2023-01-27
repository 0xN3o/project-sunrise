import Link from "next/link";
import { useRouter } from "next/router";
import { EXPLORER_URL, NFT_CONTRACT } from "../constants";

export default function Footer(props) {
  const router = useRouter();
  const { ref } = router.query;

  const navigation = [
    {
      key: "1",
      name: "Home",
      link: `/${ref ? "?ref=" + ref : ""}`,
    },
    {
      key: "2",
      name: "Dashboard",
      link: `/dashboard${ref ? "?ref=" + ref : ""}`,
    },
    {
      key: "3",
      name: "Whitepaper",
      link: `/whitepaper${ref ? "?ref=" + ref : ""}`,
    },
  ];

  const others = [
    {
      key: "1",
      name: "Contract",
      link: `${EXPLORER_URL}/token/${NFT_CONTRACT}#code`,
    },
    {
      key: "2",
      name: "Transaction",
      link: `${EXPLORER_URL}/address/${NFT_CONTRACT}`,
    },
    {
      key: "3",
      name: "Github",
      link: "https://github.com/0xN3o/project-sunrise",
    },
  ];

  return (
    <div className="bg-themeBlue border-t-8 border-black">
      <div className="mx-auto px-4 lg:px-12 py-12 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1">
          <p className="text-lg font-bold">Navigation</p>
          <ul>
            {navigation.map((item) => {
              return (
                <li key={item.key} className="mt-2">
                  <Link className="hover:underline" href={item.link}>
                    ■ {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-1">
          <p className="text-lg font-bold">Others</p>
          <ul>
            {others.map((item) => {
              return (
                <li key={item.key} className="mt-2">
                  <Link
                    className="hover:underline"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ■ {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-1">
          <div className="flex items-center">
            <img
              className="w-12 h-full pr-4"
              src="/assets/project-sunrise-logo.svg"
              alt="Project Sunrise"
            />
            <p className="text-xl">
              <span className="font-bold">Project</span> Sunrise
            </p>
          </div>
          <p className="mt-6">
            Project Sunrise is a social and experimental decentralized
            application that aims to explore the power of interconnectedness
            through blockchain. It is not an investment program. Use this
            service at your own risk.
          </p>
        </div>
      </div>
    </div>
  );
}
