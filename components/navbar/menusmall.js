import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import Link from "next/link";

export default function MenuSmall(props) {
  return (
    <Menu as="div" className={`${props.className} relative text-md`}>
      {({ open }) => (
        <div>
          <Menu.Button className="pr-4">
            {open ? (
              <XMarkIcon className="w-10 h-10 hover:text-themeYellow" />
            ) : (
              <Bars3Icon className="w-10 h-10 hover:text-themeYellow" />
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-left absolute w-56 border-4 border-black bg-white m-2 grid grid-cols-1 overflow-hidden">
              {props.linkItems.map((item) => {
                return (
                  <Menu.Item key={item.key}>
                    <Link
                      key={item.key}
                      href={item.link}
                      className={`${
                        props.activeKey == item.key
                          ? "font-bold bg-themeOrange text-white"
                          : "text-black"
                      } border-2 border-black p-4 hover:underline`}
                    >
                      ■ {item.name}
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
