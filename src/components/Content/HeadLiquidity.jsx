import { useContext } from "react";
import { ChevronDownIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { LoansState } from "../../context";

const Head = () => {
  const { selectedBranch, setSelectedBranch, isBranchOn, setIsBranchOn } = useContext(LoansState)

  const removeBranch = () => {
    setSelectedBranch(null)
  }

  return (
    <>
      <div className="bg-white border border-brand-gray-primary rounded-xl shadow-primary px-5 sm:px-8 py-6 !mt-8">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center space-x-1">
            <span className="text-2xl sm:text-28 font-semibold">
              Branch
            </span>

            <InformationCircleIcon className="w-6 h-6 text-[#777E91]" />
          </h2>

          <button type="button"
            onClick={() => setIsBranchOn(true)}
            className="w-10 h-10 flex-shrink-0 bg-brand-green lg:hover:bg-green-500 text-white transition-all duration-200 rounded-full">
            <span className="text-28 leading-5">
              +
            </span>
          </button>
        </div>

        <div className="pt-7 pb-4">
          <button type="button" onClick={() => setIsBranchOn(!isBranchOn)}
            className="w-full h-12 flex items-center justify-between ring-2 ring-brand-gray-primary hover:ring-brand-green rounded-lg transition-all duration-200 px-3">
            <span className="text-gray-800 font-medium">
              {
                selectedBranch !== null ? selectedBranch.name : 'Select branch to provide liquidity for'
              }
            </span>

            <ChevronDownIcon className="h-4 w-5" />
          </button>
        </div>
        <ul>
          {
            selectedBranch && (
              <li className="relative bg-gray-50 flex items-center rounded-xl transition duration-200 space-x-4 p-3 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden">
                  <img className="w-full h-full" src={require('../../assets/nft.png')} alt="" />
                </div>
                <div>
                  <a href="/" className="font-semibold hover:text-brand-green transition duration-200">
                    {selectedBranch && selectedBranch.name}
                  </a>
                  <p className="text-sm font-medium mt-1">
                    {selectedBranch && selectedBranch.number}%
                  </p>
                </div>

                <button type="button" onClick={removeBranch}
                  className="absolute top-5 left-12 opacity-0 group-hover:opacity-100 transition duration-200 z-20">
                  <XIcon className="w-5 h-5 bg-brand-green text-white border-2 border-white rounded-full p-0.5" />
                </button>
              </li>
            )
          }
        </ul>
      </div>
    </>
  );
};

export default Head;
