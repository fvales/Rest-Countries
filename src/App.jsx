import { ThemeProvider } from "styled-components"
import GlobalStyle from "./components/styles/Global"
import Header from "./components/Header"
import { theme, lightTheme, darkTheme } from "./constants/Theme"
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { useContext } from "react";
import { Container } from "./components/styles/Home.styled";
import Footer from "./components/Footer";
import { ModeContext } from "./context/ModeContext"

function App() {

  const { mode, modeToggler } = useContext(ModeContext)

  return (
    <ThemeProvider theme={mode === 'light' ? { ...theme, colors: { ...lightTheme } } : { ...theme, colors: { ...darkTheme } }}>
      <GlobalStyle />
      <Header themeToggler={modeToggler} mode={mode} />
      <Container>
        <RouterProvider router={router} />
      </Container>
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default App
