import { useExtention } from "../contexts/extention-context";
import type { Filter } from "../lib/types"

const buttons: { label: string; value: Filter }[] = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Active', 
    value: 'active'
  },
  {
    label: 'Inactive',
    value: 'inactive'
  }
]

 

function ButtonGroup() {
    const { activeFilter, setActiveFilter } = useExtention()
  return (
    <div className="flex gap-3">
      {buttons.map((button) => (
        <button 
          key={button.value}
          onClick={() => setActiveFilter(button.value)}
          className={`
            text-preset-3 border rounded-full pt-2 pb-2.5 px-5 cursor-pointer transition-colors duration-200
            ${activeFilter === button.value 
              ? 'text-neutral-0 bg-neutral-900 border-neutral-900 dark:text-neutral-900 dark:bg-neutral-0 dark:border-neutral-0' 
              : 'text-neutral-900 dark:text-neutral-0 border-neutral-200 dark:border-neutral-600 bg-neutral-0 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600'
            }
          `}
        >        
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup  