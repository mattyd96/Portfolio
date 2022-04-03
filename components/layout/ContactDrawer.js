import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactDrawer = props => {

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={'.5rem'} />
          <DrawerHeader fontSize={'1.4rem'} fontWeight={'700'}>Contact Details</DrawerHeader>
          <DrawerBody>
            <List spacing={5} fontSize={'1.2rem'} fontWeight={'600'}>
              <ListItem>
                <a href="mailto:matthewdcodes@gmail.com" target="blank">
                <ListIcon as={SiGmail} />
                  matthewdcodes@gmail.com
                </a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/mattyd96">
                  <ListIcon as={FaGithub} />
                  github.com/mattyd96
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.linkedin.com/in/matthew-durflinger"target="blank">
                <ListIcon as={FaLinkedin} />
                  linkedin.com/in/matthew-durflinger
                </a>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ContactDrawer;