import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate an async operation to fetch user data
    setTimeout(() => {
      setUserId('12345') // Replace with actual user ID fetching logic
      setIsLoaded(true)
    }, 1000)
  }, [])

  return (
    <AuthContext.Provider value={{ userId, isLoaded }}>
      {children}
    </AuthContext.Provider>
  )
}