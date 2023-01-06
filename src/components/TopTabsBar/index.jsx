import { useState } from "react";
import TabButton from "./TabButton";

const tabsLink = [
  {
    title: 'New Loan',
  },
  {
    title: 'My Loans'
  },
  {
    title: 'Provide Liquidity'
  },
]

const TopTabsBar = ({ setActiveTab }) => {
  const [isSelected, setIsSelected] = useState(tabsLink[0].title)

  const handleSwitch = (item, id) => {
    setActiveTab(id)
    setIsSelected(item)
  }

  return (
    <div className="bg-white flex items-center border-2 border-brand-gray-primary rounded-full p-1">
      {
        tabsLink.map((tab, index) => (
          <TabButton key={index} {...{ isSelected, handleSwitch, index }}>
            {tab.title}
          </TabButton>
        ))
      }
    </div >
  );
};

export default TopTabsBar;
