import { Fragment } from "react";
import {
  Box,
  Button,
  Icon,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { MdOpenInBrowser } from "react-icons/md";
import { BsJournalCode } from "react-icons/bs";
import classes from "./ProjectCard.module.css";

const ProjectDrawer = (props) => {
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
          <DrawerCloseButton mt={".5rem"} />
          <DrawerHeader fontSize={"1.4rem"} fontWeight={"700"}>
            {props.title}
          </DrawerHeader>
          <DrawerBody>
            <Text mb={'1rem'}>{props.description}</Text>
            {props.technologies &&
              <Fragment>
                <Text fontWeight={700} mb={'.25rem'}>Technologies Used</Text>
                <List mb={'1rem'}>
                  {props.technologies.map(tech => 
                    <ListItem>
                      <ListIcon as={BsJournalCode} />
                      {tech}
                    </ListItem>
                  )}
                </List>
              </Fragment> 
            }
            <Box className={classes.links}>
              <Button
                onClick={() => props.gotoSite(props.github)}
                display={"flex"}
                gap=".5rem"
              >
                <Icon as={GoMarkGithub} w={7} h={7} />
                <Text>Github</Text>
              </Button>
              {props.website && 
                <Button onClick={() => props.gotoSite(props.website)}                 
                  display={"flex"}
                  gap=".4rem"
                >
                  <Icon as={MdOpenInBrowser} w={8} h={8} />
                  <Text>Website</Text>
                </Button>
              }
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProjectDrawer;
