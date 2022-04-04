import NextLink from "next/link"
import { HStack, Link, Button, useColorMode, useDisclosure } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DesktopLinks = props => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing='1rem' display={['none','none','block','block']}>
      <NextLink href='/' passHref>
        <Link>Home</Link>
      </NextLink>
      <NextLink href='/about' passHref>
        <Link>About Me</Link>
      </NextLink>
      <NextLink href='/projects' passHref>
        <Link>Projects</Link>
      </NextLink>
      <Link onClick={props.onOpen}>Contact</Link>
      <Link href='https://docs.google.com/document/d/1U9uNR5Uw96ogn3mztNes73d-I1N01Sv23sBiSXWEXDo/edit?usp=sharing' target='blank'>Resume</Link>
      <Button onClick={toggleColorMode}>{colorMode == 'light' ? <MoonIcon /> : <SunIcon />}</Button>
    </HStack>
  );
};

export default DesktopLinks;