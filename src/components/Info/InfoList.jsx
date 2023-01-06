const InfoList = ({ value, rate, duration }) => {
  return (
    <ul className="divide-y divide-gray-200">
      <li className="flex items-center justify-between text-sm py-3">
        <span className="text-gray-700">
          NFT Collateral Value
        </span>
        <span className="text-gray-800 font-medium">
          {value ? value : '0.00'} ETH
        </span>
      </li>
      <li className="flex items-center justify-between text-sm py-3">
        <span className="text-gray-700">
          Interest Rate
        </span>
        <span className="text-gray-800 font-medium">
          {rate ? rate : '0'}%
        </span>
      </li>
      <li className="flex items-center justify-between text-sm py-3">
        <span className="text-gray-700">
          Loan Duration
        </span>
        <span className="text-gray-800 font-medium">
          {duration ? duration : '0'} Days
        </span>
      </li>
    </ul>
  );
};

export default InfoList;
