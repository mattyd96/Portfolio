import { Fragment } from "react";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

const NavLinks = () => {
  return (
    <Fragment>
      <MobileLinks />
      <DesktopLinks />
    </Fragment>
  );
};

export default NavLinks;