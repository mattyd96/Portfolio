import NextLink from "next/Link";
import { Menu, MenuButton, MenuList, MenuItem, Link, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"

const MobileLinks = () => {
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
        <NextLink href='#' passHref>
          <MenuItem>Home</MenuItem>
        </NextLink>
        <NextLink href='#' passHref>
          <MenuItem>About Me</MenuItem>
        </NextLink>
        <NextLink href='#' passHref>
          <MenuItem>Projects</MenuItem>
        </NextLink>
        <NextLink href='#' passHref>
          <MenuItem>Contact</MenuItem>
        </NextLink>
        <NextLink href='#' passHref>
          <MenuItem>Resume</MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  );
};

export default MobileLinks;
