import { Center } from "@chakra-ui/react";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

const NavLinks = () => {
  return (
    <Center>
      <MobileLinks />
      <DesktopLinks />
    </Center>
  );
};

export default NavLinks;