import { useContext } from 'react'
import { LoansState } from "../../context";
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Skelton from "./Skelton";

const NFTCard = ({ nft: { name, subNumber, id }, index, isActive = 0, clickHandle }) => {

  const { values: { branches }, setSelectedNFT } = useContext(LoansState)

  const handleClick = (id) => {
    clickHandle(id)
    const selectedNFT = branches.filter(item => item.id === id)
    setSelectedNFT(selectedNFT[0])
  }

  return (
    <div onClick={() => handleClick(id)} className={`relative bg-white ring-4 ring-transparent hover:ring-brand-green shadow-card rounded-xl overflow-hidden cursor-pointer transition duration-300 group ${isActive === index + 1 ? 'ring-brand-green' : ''
      }`}>
      <div className="h-72 w-full"></div>
      <div className="flex items-center justify-between hover:text-brand-green px-3 py-2.5">
        <p className="font-medium">
          {name} {"   "}  #{subNumber && subNumber}
        </p>

        <ChevronRightIcon className="w-4 h-4" />
      </div>

      <CheckIcon className={`w-6 h-6 text-white border-2 bg-brand-green border-white rounded-full absolute top-5 right-5 group-hover:opacity-100 transition duration-300 p-0.5 z-10
        ${isActive === index + 1 ? 'opacity-100' : 'opacity-0 '
        }
      `} />

      <Skelton />
    </div>
  );
};

export default NFTCard;
