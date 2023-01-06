import { useContext } from "react";
import { ChevronDownIcon, MenuAlt1Icon } from '@heroicons/react/outline'
import InfoList from "../Info/InfoList";
import { LoansState } from "../../context";

const Content = () => {
  const { selectedNFT, selectedBranch, setIsBranchOn } = useContext(LoansState)

  const { value, rate, duration } = { ...selectedNFT }

  return (
    <div className="bg-white border border-brand-gray-primary rounded-xl shadow-primary space-y-4 sm:space-y-5 px-5 sm:px-8 py-6">
      <h2>
        <span className="text-2xl sm:text-28 font-semibold">
          Loan Options
        </span>
      </h2>

      <div>
        <label className="block text-gray-800 font-medium mb-1">
          Branch
        </label>
        <button type="button"
          onClick={() => setIsBranchOn(true)}
          className="w-full h-12 flex items-center justify-between ring-2 ring-brand-gray-primary hover:ring-brand-green rounded-lg transition-all duration-200 px-3">
          <span className="text-gray-800 font-medium">
            {
              selectedBranch && selectedBranch ? selectedBranch.name : 'Select a branch to get a loan from'
            }
          </span>

          <ChevronDownIcon className="h-4 w-5" />
        </button>
      </div>

      <div>
        <label className="block text-gray-800 font-medium mb-1">
          Loan Amount
        </label>
        <div className="relative w-full h-12 flex items-center justify-between ring-2 ring-brand-gray-primary hover:ring-brand-green rounded-lg transition-all duration-200 px-3">
          <input type="text" className="w-full h-full focus:outline-none placeholder-gray-400 font-medium pl-8 pr-9" placeholder="0.00" />

          <MenuAlt1Icon className="w-6 h-6 text-gray-400 absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none" />
          <button type="button" className="absolute top-1/2 right-3 -translate-y-1/2 ">
            <span className="font-medium text-gray-400 hover:text-gray-700">
              Max
            </span>
          </button>
        </div>
      </div>

      <InfoList {...{ value, rate, duration }} />

      <button type="button" className="w-full h-12 bg-brand-green hover:bg-green-500 text-white font-medium transition-all duration-200 rounded-md">
        Approve your NFT
      </button>
    </div>
  );
};

export default Content;
