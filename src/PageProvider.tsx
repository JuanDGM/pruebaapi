import { ThemeProvider } from "@mui/material"
import { useTheme } from "next-themes"
import { FC, ReactNode, useEffect, useState } from "react"
import { standardTheme , darkTheme} from "../themes"

interface Props{
    children: ReactNode
}

const PageProvider:FC<Props> = ({children} ) => {
  
  const { resolvedTheme } = useTheme()
  const[currentTheme, setCurrentTheme] = useState(standardTheme)
  
  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(standardTheme)
      : setCurrentTheme(darkTheme)
  }, [resolvedTheme])
  

  return (
    <ThemeProvider theme={currentTheme}>
        {children}
    </ThemeProvider>
  )
}

export default PageProvider;