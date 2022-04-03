import NextLink from 'next/Link';
import { Center, Flex, Spacer, Heading, useDisclosure } from "@chakra-ui/react";
import NavLinks from './links/NavLinks';
import { Fragment } from 'react';
import ContactDrawer from './ContactDrawer';

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
        <NavLinks onOpen={onOpen} onClose={onClose} />
      </Flex>
      <ContactDrawer isOpen={isOpen} onClose={onClose}/>
    </Fragment>
  );
};

export default Navbar;