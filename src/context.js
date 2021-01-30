import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

const AppContext = createContext()
const colorFormats = [
  {
    name: 'hex',
    description: 'HEX (#AA1923)',
  },
  {
    name: 'hexClean',
    description: 'HEX (AA1923)',
  },
  {
    name: 'rgb',
    description: 'RGB - (1,2,3)',
  },
  {
    name: 'rgba',
    description: 'RGBA - (1,2,3,0.4)',
  },
]

export const AppProvider = ({ children }) => {
  const [hasShownSubmenu, setHasShownSubmenu] = useState(false)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [selectedColorFormat, setSelectedColorFormat] = useState(colorFormats[0])
  // Excludes selectedColorFormat from colorFormats
  const filterColorFormats = useCallback(
    () => colorFormats.filter((format) => format.description !== selectedColorFormat.description),
    [selectedColorFormat]
  )
  const [submenuItems, setSubmenuItems] = useState(filterColorFormats())

  useEffect(() => {
    setSubmenuItems(filterColorFormats())
  }, [selectedColorFormat, filterColorFormats])

  return (
    <AppContext.Provider
      value={{
        isSoundOn,
        setIsSoundOn,
        hasShownSubmenu,
        setHasShownSubmenu,
        selectedColorFormat,
        submenuItems,
        setSelectedColorFormat,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
