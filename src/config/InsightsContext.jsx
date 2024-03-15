// InsightsContext.jsx
import React, { createContext, useState, useContext } from 'react'

const InsightsContext = createContext()

export const useInsights = () => useContext(InsightsContext)

export const InsightsProvider = ({ children }) => {
  const [insights, setInsights] = useState([])

  return (
    <InsightsContext.Provider value={{ insights, setInsights }}>
      {children}
    </InsightsContext.Provider>
  )
}
