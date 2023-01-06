import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from "@heroicons/react/outline"
import BranchCard from "../Card/BranchCard"
import { LoansState } from "./../../context";


export default function BranchModal() {
  const [branches, setBranches] = useState([])
  const { values, isBranchOn, setIsBranchOn } = useContext(LoansState)


  useEffect(() => {
    setBranches(values.branches)
  }, [values])

  return (
    <Transition.Root show={isBranchOn} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setIsBranchOn}>
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

            <div className="sm:max-w-6xl sm:w-full inline-block align-bottom text-left sm:my-8 sm:align-middle">
              <div className="max-w-md mx-auto min-h-[576px] bg-white rounded-lg overflow-hidden transform transition-all shadow-modal px-4 py-7 sm:p-7">

                {/* Head */}
                <div className="flex items-center justify-between pb-8 lg:pb-16">
                  <h2 className="text-28 font-semibold">
                    Branches
                  </h2>

                  <button type="button" onClick={() => setIsBranchOn(false)}
                    className="border-2 border-brand-gray-primary hover:border-brand-gray-secondary focus:outline-none rounded-full p-1">
                    <XIcon className="w-7 h-7" />
                  </button>
                </div>

                <div className="relative max-h-[464px] flex flex-col overflow-hidden">
                  <ul className="overflow-y-auto space-y-4 pb-5">
                    {
                      branches && branches.map((branch, index) => (
                        <BranchCard key={index} branch={branch} />
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

