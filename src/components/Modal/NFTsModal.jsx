import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { LoansState } from "../../context";
import NFTLists from "../List/NFTLists";

export default function Modal() {
  const { setSelectedBranch, open, setOpen } = useContext(LoansState)

  const onClose = () => {
    setSelectedBranch(null)
    setOpen(!open)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center sm:items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-x-0"
            enterTo="opacity-100 translate-y-0 sm:scale-x-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-x-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-x-0"
          >

            <div className="sm:max-w-xl xl:max-w-6xl w-full inline-block align-bottom text-left sm:my-8 sm:align-middle">
              <NFTLists />
            </div>

          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

