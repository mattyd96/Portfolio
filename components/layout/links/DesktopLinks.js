import NextLink from "next/Link"
import { HStack, Link } from "@chakra-ui/react";

const DesktopLinks = () => {
  return (
    <HStack spacing='1rem' display={['none','none','block','block']}>
      <NextLink href='#' passHref>
        <Link>Home</Link>
      </NextLink>
      <NextLink href='#' passHref>
        <Link>About Me</Link>
      </NextLink>
      <NextLink href='#' passHref>
        <Link>Projects</Link>
      </NextLink>
      <NextLink href='#' passHref>
        <Link>Contact</Link>
      </NextLink>
      <NextLink href='#' passHref>
        <Link>Resume</Link>
      </NextLink>
    </HStack>
  );
};

export default DesktopLinks;