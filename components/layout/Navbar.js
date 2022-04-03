import NextLink from 'next/Link';
import { Center, Flex, Spacer, Heading } from "@chakra-ui/react";
import NavLinks from './links/NavLinks';

const Navbar = props => {
  return (
    <Flex height='3rem'>
      <Center>
        <NextLink href='/'>
          <Heading fontFamily='Sora' fontSize='xl' fontWeight='bold'  _hover={{cursor: 'pointer'}}>Matthew Durflinger</Heading>
        </NextLink>
      </Center>
      <Spacer />
      <NavLinks />
    </Flex>
  );
};

export default Navbar;