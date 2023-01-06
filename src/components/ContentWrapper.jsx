import { useState } from "react";
import { NewLoan, MyLoans, ProvideLiquidity } from "./Tabs";
import TopTabsBar from "./TopTabsBar";


const ContetWrapper = () => {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div className="w-full max-w-md mx-auto space-y-6 sm:space-y-10 py-16 sm:px-4">
      <TopTabsBar setActiveTab={setActiveTab} />

      {
        activeTab === 1 ? <NewLoan /> :
          activeTab === 2 ? <MyLoans /> :
            activeTab === 3 && <ProvideLiquidity />
      }

    </div>
  )
};

export default ContetWrapper;
