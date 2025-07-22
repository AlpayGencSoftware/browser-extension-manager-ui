import SwitchButton from "./switch-button"
import type { Extention } from "../lib/types"
import { useExtention } from "../contexts/extention-context"

interface ExtentionCardProps {
  extention: Extention
}

function ExtentionCard({ extention }: ExtentionCardProps) {
  const { handleRemove, handleToggle } = useExtention()

  return (
    <article className="border border-neutral-200 dark:border-neutral-600 rounded-[1.25rem] p-5 bg-neutral-0 dark:bg-neutral-800 h-[200px] flex flex-col justify-between">
      {/* card content */}
      <div className="flex items-center gap-4 mb-6">
        <img src={extention.logo} alt={extention.name} width={60} height={60} />

        <div>
          <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-0 mb-2">
            {extention.name}
          </h2>
          <p className="text-preset-6 text-neutral-600 dark:text-neutral-300">
            {extention.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => handleRemove(extention.id)}
          className="text-preset-6 border border-neutral-300 dark:border-neutral-600 py-2 px-4 rounded-full cursor-pointer hover:text-neutral-0 hover:bg-red-400 transition-colors duration-200 dark:hover:text-white dark:hover:bg-red-400"
        >
          Remove
        </button>
        <SwitchButton
          onToggle={() => handleToggle(extention.id)}
          checked={extention.isActive}
          disabled={false}
        />
      </div>
    </article>
  )
}

export default ExtentionCard