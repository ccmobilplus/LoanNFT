import logo from './logo.png'
import Header from "./components/Header";
import ContetWrapper from "./components/ContentWrapper";
import { LoansContext } from "./context";
import NFTsModal from "./components/Modal/NFTsModal";
import BranchModal from "./components/Modal/BranchesModal";

const App = () => {
  return (
    <LoansContext>

      <div className="sticky top-5 flex justify-end px-5 sm:px-20 py-5">
        <button type="button" className="h-10 bg-white flex items-center border-2 border-brand-gray-primary rounded-full lg:hover:border-brand-gray-secondary transition-all duration-200 space-x-2 px- p-0.5">
          <span className="h-full w-8 rounded-full overflow-hidden">
            <img className="w-full h-full" src={logo} alt="" />
          </span>
          <span className="text-sm font-semibold pr-3">
            0xae...1e16
          </span>
        </button>
      </div>

      <div className="flex flex-col h-full pt-10 lg:pt-20  px-4">
        <Header />

        <ContetWrapper />
      </div>

      <NFTsModal />
      <BranchModal />

    </LoansContext>
  );
};

export default App;
