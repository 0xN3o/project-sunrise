import { UserCircleIcon } from "@heroicons/react/20/solid";

export default function Rankings(props) {
  const rankings = [
    {
      id: 1,
      wallet: "0x1234...1234",
      rewards: 99.99,
    },
    {
      id: 2,
      wallet: "0xABAB...ABAB",
      rewards: 88.88,
    },
    {
      id: 3,
      wallet: "0xCDCD...CDCD",
      rewards: 77.77,
    },
    {
      id: 4,
      wallet: "0xEFEF...EFEF",
      rewards: 66.66,
    },
    {
      id: 5,
      wallet: "0x3434...3434",
      rewards: 55.55,
    },
  ];

  return (
    <div className="bg-gray-200 border-4 border-black p-4">
      <p>Top 5 wallet</p>
      <ul className="flex flex-col gap-2 mt-4">
        {rankings.map((item) => {
          return (
            <li key={item.id} className="flex gap-4">
              <div className="bg-white rounded-full p-1 my-auto">
                <UserCircleIcon className="w-5 h-5" />
              </div>
              <div className="my-auto text-sm">
                <span className="font-bold">{item.wallet}</span> withdrawn{" "}
                <span className="font-bold">{item.rewards} BNB</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
