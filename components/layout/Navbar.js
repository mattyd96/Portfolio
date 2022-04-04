import NextLink from 'next/Link';
import { Center, Flex, Spacer, Heading, useDisclosure } from "@chakra-ui/react";
import NavLinks from './links/NavLinks';
import { Fragment } from 'react';
import ContactDrawer from './ContactDrawer';

const gotoResume = () => {
  window.open('https://docs.google.com/document/d/e/2PACX-1vRSN996r_8cIKOS7kvLWIAhsXmaQ8k2PdF5oXWTRrEPZe9RbBhHSBlhssSBJXpOrCpt3GJtStmyq4X6/pub', 'blank');
}

const Navbar = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <Flex height='3rem'>
        <Center>
          <NextLink href='/'>
            <Heading fontFamily='Sora' fontSize='xl' fontWeight='bold'  _hover={{cursor: 'pointer'}}>Matthew Durflinger</Heading>
          </NextLink>
        </Center>
        <Spacer />
        <NavLinks onOpen={onOpen} onClose={onClose} gotoResume={gotoResume} />
      </Flex>
      <ContactDrawer isOpen={isOpen} onClose={onClose}/>
    </Fragment>
  );
};

export default Navbar;