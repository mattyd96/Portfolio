import { Center, Flex, Spacer, Heading } from "@chakra-ui/react";
import NavLinks from './links/NavLinks';

const Navbar = props => {
  return (
    <Flex height='3rem'>
      <Center>
        <Heading fontFamily='Sora' fontSize='xl' fontWeight='bold'>Matthew Durflinger</Heading>
      </Center>
      <Spacer />
      <NavLinks />
    </Flex>
  );
};

export default Navbar;