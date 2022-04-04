import NextLink from 'next/link';
import { Center, Flex, Spacer, Heading, useDisclosure } from "@chakra-ui/react";
import NavLinks from './links/NavLinks';
import { Fragment } from 'react';
import ContactDrawer from './ContactDrawer';

const gotoResume = () => {
  window.open('https://docs.google.com/document/d/1U9uNR5Uw96ogn3mztNes73d-I1N01Sv23sBiSXWEXDo/edit?usp=sharing', 'blank');
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