import { useContext, useState, useEffect } from 'react'
import { LoansState } from "../../context";
import NFTCard from "../Card/NFTCard";
import { XIcon } from "@heroicons/react/outline";

const NFTLists = () => {
  const [nfts, setNfts] = useState([])
  const [isActive, setIsActive] = useState(null)
  const { values, selectedNFT, setOpen } = useContext(LoansState)
  console.log(selectedNFT)

  const { value } = { ...selectedNFT }

  useEffect(() => {
    setNfts(values.branches)
  }, [values])

  const clickHandle = (id) => {
    if (isActive !== id) {
      setIsActive(id)
    } else {
      setIsActive(null)
    }
  }

  return (
    <div className="min-h-[576px] bg-white rounded-lg overflow-hidden transform transition-all shadow-modal px-4 sm:px-10 py-9">
      {/* head */}
      <div className="flex items-center justify-between pb-4 sm:pb-8 lg:pb-12">
        <h2 className="text-2xl sm:text-28 font-semibold">
          My NFT’s
        </h2>

        <button type="button" onClick={() => setOpen(false)}
          className="border-2 border-brand-gray-primary hover:border-brand-gray-secondary focus:outline-none rounded-full p-1">
          <XIcon className="w-7 h-7" />
        </button>
      </div>

      <div className="list-grid relative max-h-[440px] flex flex-col overflow-hidden -mx-4">
        <div className="h-full overflow-y-auto">
          <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 p-4 pb-12">
            {
              nfts && nfts.map((nft, index) => (
                <NFTCard key={index} {...{ nft, index, isActive, clickHandle }} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-5">
        {
          isActive ? (
            <button type="button"
              onClick={() => setOpen(false)}
              className="h-11 w-full sm:w-auto bg-brand-green hover:bg-green-600 flex items-center justify-center sm:justify-start text-white rounded-full px-5">
              <span className="font-medium">
                See Loan  Details
              </span>
              <span className="opacity-75 ml-6">
                {value} ETH
              </span>
            </button>
          ) : (
            <span className="block bg-gray-400 text-white font-medium rounded-full cursor-not-allowed px-5 py-2">
              Select NFT
            </span>
          )
        }
      </div>

    </div>
  )
};

export default NFTLists;
