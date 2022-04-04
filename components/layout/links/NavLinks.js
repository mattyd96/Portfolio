import { Center } from "@chakra-ui/react";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

const NavLinks = props => {
  return (
    <Center>
      <MobileLinks onOpen={props.onOpen} onClose={props.onClose} gotoResume={props.gotoResume}/>
      <DesktopLinks onOpen={props.onOpen} onClose={props.onClose}/>
    </Center>
  );
};

export default NavLinks;