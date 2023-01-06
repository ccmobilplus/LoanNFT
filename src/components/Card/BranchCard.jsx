import { ChevronRightIcon } from "@heroicons/react/outline"
import { BadgeCheckIcon } from "@heroicons/react/solid"
import { useContext } from "react";
import { LoansState } from "./../../context";


const BranchCard = ({ branch: { id, name, number } }) => {
  const { values: { branches }, setSelectedBranch, setIsBranchOn } = useContext(LoansState)

  const handleClick = (id) => {
    const selectedBranch = branches.filter(item => item.id === id)
    setSelectedBranch(selectedBranch[0])
    setIsBranchOn(false)
  }
  return (
    <li onClick={() => handleClick(id)} className="flex items-center hover:bg-gray-50 transition duration-200 pr-2 space-x-5 rounded-xl overflow-hidden cursor-pointer">
      <div className="w-16 16 rounded-xl overflow-hidden">
        <img className="w-full h-full" src={require('../../assets/nft.png')} alt="" />
      </div>
      <div className="flex items-center flex-1">
        <p className="flex items-center space-x-1">
          <span className="font-semibold">
            {name}
          </span>
          <BadgeCheckIcon className="w-4 h-4 text-[#3772ff]" />
        </p>

        <p className="flex items-center ml-auto">
          <span className="text-brand-gray-secondary text-sm mr-1">
            {number}
          </span>
          <ChevronRightIcon className="w-4 h-4 text-gray-900 font-semibold" />
        </p>
      </div>
    </li>
  );
};

export default BranchCard;
