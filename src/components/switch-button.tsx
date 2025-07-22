import { useState } from 'react'

type SwitchButtonProps = {
  checked?: boolean;
  onToggle?: (isOn: boolean) => void;
  disabled?: boolean;
}

function SwitchButton({ checked = false, onToggle, disabled = false }: SwitchButtonProps) {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return (
    <div className="flex items-center gap-3">
      <button 
        onClick={handleToggle}
        disabled={disabled}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300
          ${isOn 
            ? 'bg-neutral-900 dark:bg-red-400 border border-neutral-200' 
            : 'bg-neutral-300 dark:bg-neutral-600 border border-neutral-200'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-neutral-0 transition-transform duration-200 ease-in-out
            ${isOn ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
      
      <span className={`text-preset-6 transition-colors duration-200 ${
        isOn 
          ? 'text-neutral-900 dark:text-neutral-100' 
          : 'text-neutral-600 dark:text-neutral-400'
      }`}>
        {isOn ? 'On' : 'Off'}
      </span>
    </div>
  );
}

export default SwitchButton;