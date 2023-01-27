import Link from "next/link";

export default function MenuLarge(props) {
  return (
    <div className={`${props.className} text-lg`}>
      <div className="flex-1"></div>
      <div className="grid grid-rows-1 grid-flow-col gap-16 pr-16">
        {props.linkItems.map((item) => {
          return (
            <Link
              key={item.key}
              href={item.link}
              className={`${
                props.activeKey == item.key
                  ? "font-bold underline text-themeYellow"
                  : "text-white"
              } duration-100 hover:-translate-y-1 hover:text-themeYellow hover:font-bold hover:underline`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
