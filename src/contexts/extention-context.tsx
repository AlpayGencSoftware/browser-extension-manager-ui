import { createContext, useContext, useMemo, useState } from "react"
import { data } from "../lib/data"
import type { Extention, Filter } from "../lib/types"

interface ExtentionContextType {
  extensions: Extention[]
  filteredExtensions: Extention[]
  activeFilter: Filter
  setActiveFilter: (filter: Filter) => void
  handleRemove: (id: Extention["id"]) => void
  handleToggle: (id: Extention["id"]) => void
}

export const ExtentionContext = createContext<ExtentionContextType | undefined>(undefined)

export const ExtentionProvider = ({ children }: { children: React.ReactNode }) => {
  const [extensions, setExtensions] = useState(data)
  const [activeFilter, setActiveFilter] = useState<Filter>("all")

  function handleRemove(id: Extention["id"]) {
    setExtensions(extensions.filter((extension) => extension.id !== id))
  }

  function handleToggle(id: Extention["id"]) {
    setExtensions(extensions.map((extension) => 
      extension.id === id 
        ? { ...extension, isActive: !extension.isActive } 
        : extension
    ))
  }

  const filteredExtensions = useMemo(() => {
    return extensions.filter((extension) => {
      if (activeFilter === "all") return true
      if (activeFilter === "active") return extension.isActive
      if (activeFilter === "inactive") return !extension.isActive
      return false
    })
  }, [extensions, activeFilter])

  const contextValue: ExtentionContextType = {
    extensions,
    filteredExtensions,
    activeFilter,
    setActiveFilter,
    handleRemove,
    handleToggle
  }

  return (
    <ExtentionContext.Provider value={contextValue}>
      {children}
    </ExtentionContext.Provider>
  )
}

export function useExtention() {
  const context = useContext(ExtentionContext)
  if (context === undefined) {
    throw new Error('useExtention must be used within an ExtentionProvider')
  }
  return context
}
