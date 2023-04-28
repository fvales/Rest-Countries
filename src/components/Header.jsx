import { StyledHeader } from "./styles/Header.styled"
import { Flex } from "./styles/Flex.styled"
import { Image } from "./styles/Image.styled"
import moon_light from "../assets/moon-regular.svg"
import moon_dark from "../assets/moon-solid.svg"

const Header = ({ themeToggler, mode }) => {
  return (

    <Flex as={StyledHeader} alignItems="center" justifyContent="space-between">
      <h1>Where in the world?</h1>
      <Flex gap="0.5rem" alignItems="center">
        <Image alt='mode-icon' onClick={themeToggler} src={mode === 'light' ? moon_light : moon_dark} width="2rem" height="2rem" />
        <span>Dark Mode</span>
      </Flex>
    </Flex>
  )
}

export default Header