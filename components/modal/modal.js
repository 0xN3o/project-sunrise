import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAppContext } from "../context/appcontext";
import LoadingAnimation from "./loading";

export default function Modal(props) {
  // Application wide context
  const { appModal, setAppModal } = useAppContext();

  function closeModal() {
    setAppModal({ ...appModal, show: false });
    appModal.onClose();
  }

  return (
    <div>
      <Transition appear show={appModal.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 shadow-xl border-4 border-black">
                  <Dialog.Title as="h3" className="text-xl text-black">
                    {appModal.title}
                  </Dialog.Title>
                  <div className="mt-6">
                    <p className="text-sm text-black">{appModal.description}</p>
                  </div>
                  {appModal.type == "dialog" && (
                    <div className="mt-6">
                      <button
                        type="button"
                        className="py-2 px-6 border-4 border-black text-black font-bold bg-themeOrange duration-100 hover:-translate-y-1 hover:bg-themeYellow focus:outline-none"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  )}
                  {appModal.type == "progress" && (
                    <div className="mt-6 mx-auto flex items-center justify-center h-6 w-6">
                      <LoadingAnimation />
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
