import NextLink from "next/Link";
import { Menu, MenuButton, MenuList, MenuItem, Link, IconButton, Button, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"

const MobileLinks = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Navigation Links"
        icon={<HamburgerIcon />}
        variant="outline"
        display={['block','block','none','none']}
      />
      <MenuList display={['block','block','none','none']} zIndex='1000'>
        <NextLink href='/' passHref>
          <MenuItem>Home</MenuItem>
        </NextLink>
        <NextLink href='#' passHref>
          <MenuItem>About Me</MenuItem>
        </NextLink>
        <NextLink href='/projects' passHref>
          <MenuItem>Projects</MenuItem>
        </NextLink>
        <NextLink href='#' passHref>
          <MenuItem>Contact</MenuItem>
        </NextLink>
        <NextLink href='#' passHref>
          <MenuItem>Resume</MenuItem>
        </NextLink>
        <MenuItem onClick={toggleColorMode} display={'flex'} justifyContent={'space-between'}>
          Toggle
          {colorMode == 'light' ? ' Dark' : ' Light'}
          {colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
          </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileLinks;
