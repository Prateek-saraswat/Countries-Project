import  { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export function useTheme() {
  const [isDark, setIsDark] =useContext(ThemeContext)
  return [isDark, setIsDark] 
}

//shorter Way

// export const useTheme = () => useContext(ThemeContext)
