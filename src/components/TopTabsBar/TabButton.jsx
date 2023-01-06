

const TabButton = ({ children, handleSwitch, isSelected, index }) => {
  return (
    <button type="button"
      onClick={() => handleSwitch(children, index + 1)}
      className={`flex-shrink-0 flex-1 text-sm sm:text-base whitespace-nowrap font-medium leading-7 rounded-full transition-all duration-200 px-3 py-1 
      ${isSelected === children ?
          'bg-brand-green text-white' : 'bg-transparent text-brand-gray-secondary'
        }`}
    >
      {children}
    </button>
  )
}

export default TabButton;
