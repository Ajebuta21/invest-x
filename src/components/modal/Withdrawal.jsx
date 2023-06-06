import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Withdrawal = () => {
      let [isOpen, setIsOpen] = useState(false);

      function closeModal() {
        setIsOpen(false);
      }

      function openModal() {
        setIsOpen(true);
      }
  return (
    <>
      <button
        onClick={openModal}
        className="bg-sky-400 py-1.5 w-36 border border-sky-400 rounded-md text-white hover:bg-white hover:text-sky-400 shadow-md transition ease-in-out duration-300"
      >
        Withdraw
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-sky-400 text-center"
                  >
                    Withdraw your assets
                  </Dialog.Title>
                  <form className="w-full bg-white px-2 py-10 flex flex-col gap-4 items-center text-sky-400 text-sm">
                    <p className="tracking-tight text-sky-400 w-full text-left">
                      Enter the amount you wish to withdraw:
                    </p>
                    <div className="w-full relative group flex rounded-md border text-gray-700">
                      <div className="w-2/12 flex items-center rounded-l-md justify-center h-full bg-gray-200 p-2">
                        $
                      </div>
                      <input
                        type="text"
                        placeholder="Amount"
                        className="w-full rounded-r-md outline-none p-2"
                      />
                    </div>
                    <span className="w-full flex justify-between items-center">
                      <button className="bg-sky-400 py-1.5 w-36 border border-sky-400 rounded-md text-white hover:bg-white hover:text-sky-400 shadow-md transition ease-in-out duration-300 flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Confirm
                      </button>
                      <div
                        onClick={closeModal}
                        className="bg-red-500 py-1.5 w-36 border border-red-500 rounded-md text-white hover:bg-white hover:text-red-500 shadow-md transition ease-in-out duration-300 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Reject
                      </div>
                    </span>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Withdrawal;
