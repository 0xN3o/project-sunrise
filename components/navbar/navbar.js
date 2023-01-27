import MenuLarge from "./menularge";
import MenuSmall from "./menusmall";
import WalletButton from "./walletbutton";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const router = useRouter();
  const { ref } = router.query;

  const linkItems = [
    { key: "home", link: `/${ref ? "?ref=" + ref : ""}`, name: "Home" },
    {
      key: "dashboard",
      link: `/dashboard${ref ? "?ref=" + ref : ""}`,
      name: "Dashboard",
    },
    {
      key: "whitepaper",
      link: `/whitepaper${ref ? "?ref=" + ref : ""}`,
      name: "Whitepaper",
    },
  ];

  return (
    <div className="bg-themeBlue border-b-8 border-black">
      <div className="mx-auto px-4 lg:px-12 max-w-7xl h-24 flex items-center">
        <div>
          {/* Mobile menu */}
          <MenuSmall
            className="lg:hidden"
            linkItems={linkItems}
            activeKey={props.activeKey}
          />
        </div>
        <div className="flex items-center">
          {/* Brand */}
          <img
            className="w-16 h-full pr-4"
            src="/assets/project-sunrise-logo.svg"
            alt="Project Sunrise"
          />
          <p className="hidden lg:block text-2xl">
            <span className="font-bold">Project</span> Sunrise
          </p>
        </div>
        <div className="flex-1">
          {/* Navigation */}
          <MenuLarge
            className="hidden lg:flex"
            linkItems={linkItems}
            activeKey={props.activeKey}
          />
        </div>
        <div>
          {/* Wallet button */}
          <WalletButton />
        </div>
      </div>
    </div>
  );
}
