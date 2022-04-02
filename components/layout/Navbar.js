import { Center, Flex, Spacer, Heading } from "@chakra-ui/react";
import NavLinks from './links/NavLinks';

const Navbar = props => {
  return (
    <Flex px='2rem' py='1rem'>
      <Center>
        Matthew Durflinger
      </Center>
      <Spacer />
      <NavLinks />
    </Flex>
  );
};

export default Navbar;