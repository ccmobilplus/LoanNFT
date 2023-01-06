import { createContext, useState } from "react";

export const LoansState = createContext();

const branches = [
  {
    id: 1,
    name: "Bored Ape 1",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 2342,
    number: "23",
  },
  {
    id: 2,
    name: "Bored Ape 2",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 1234,
    number: "45",
  },
  {
    id: 3,
    name: "Bored Ape 3",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 4563,
    number: "83",
  },
  {
    id: 4,
    name: "Bored Ape 4",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 7786,
    number: "23",
  },
  {
    id: 5,
    name: "Bored Ape 5",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 3456,
    number: "41",
  },

  {
    id: 6,
    name: "Bored Ape 7",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 7212,
    number: "74",
  },
  {
    id: 7,
    name: "Bored Ape 8",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 4236,
    number: "77",
  },
  {
    id: 8,
    name: "Bored Ape 9",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 8652,
    number: "14",
  },
  {
    id: 9,
    name: "Bored Ape 10",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 3265,
    number: "95",
  },
  {
    id: 10,
    name: "Bored Ape 11",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 1235,
    number: "65",
  },
  {
    id: 11,
    name: "Bored Ape 6",
    value: 58.7,
    rate: 14,
    duration: 24,
    subNumber: 1976,
    number: "28",
  },
];

export const LoansContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isBranchOn, setIsBranchOn] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const values = {
    branches: branches,
  };

  return (
    <LoansState.Provider
      value={{
        open,
        setOpen,
        isBranchOn,
        setIsBranchOn,
        selectedBranch,
        setSelectedBranch,
        selectedNFT,
        setSelectedNFT,
        values,
      }}
    >
      {children}
    </LoansState.Provider>
  );
};
