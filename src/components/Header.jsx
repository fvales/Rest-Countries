import { StyledHeader } from "./styles/Header.styled"
import { Flex } from "./styles/Flex.styled"
import moon from "../assets/moon.svg"
import { ReactSVG } from "react-svg"

const Header = ({ themeToggler }) => {
  return (

    <Flex as={StyledHeader} alignItems="center" justifyContent="space-between">
      <h1>Where in the world?</h1>
      <Flex gap="0.5rem" alignItems="center">
        <ReactSVG src={moon} onClick={themeToggler}/>
        <span>Dark Mode</span>
      </Flex>
    </Flex>
  )
}

export default Header