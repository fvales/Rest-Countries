import { ThemeProvider } from "styled-components"
import GlobalStyle from "./components/styles/Global"
import Header from "./components/Header"
import { theme, lightTheme, darkTheme } from "./constants/Theme"
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');

  const themeToggler = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }

  return (
    <ThemeProvider theme={mode === 'light' ? { ...theme, colors: { ...lightTheme } } : { ...theme, colors: { ...darkTheme } }}>
      <GlobalStyle />
      <Header themeToggler={themeToggler} mode={mode} />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
