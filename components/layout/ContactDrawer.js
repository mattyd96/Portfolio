import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'

const ContactDrawer = props => {

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement='right'
        onClose={props.onClose}
        size={'md'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contact Details</DrawerHeader>

          <DrawerBody>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ContactDrawer;