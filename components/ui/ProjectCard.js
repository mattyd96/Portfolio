import { Box, Button, Grid, Heading, Image, Flex, Spacer } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { MdOpenInBrowser } from "react-icons/md";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <Grid
      className={classes.card}
      minH={"17rem"}
      height={'100%'}
      boxShadow="2xl"
      rounded='md'
      overflow={'hidden'}
      templateColumns="1fr"
    >
      <Image
        src={props.image}
        gridColumn={1}
        gridRow={1}
        boxSize="100%"
        objectFit="cover"
        zIndex={1}
      ></Image>
      
      <Flex
        className={classes.info}
        gridColumn={1}
        gridRow={1}
        zIndex={2}
        height='100%'
        direction={'column'}
        display={'none'}
      >
        <Heading
          as="h3"
          fontSize={['2rem', '4rem', '1rem', '1rem', '2rem', '2.7rem']}
          color='#fff'
        >
          {props.title}
        </Heading>
        <Spacer />
        <Box className={classes.links}>
          <a href={props.github} target='blank'>Github<Icon as={GoMarkGithub} w={8} h={8} color={'blue'} /></a>
          {props.website && <a href={props.website} target='blank'>website <Icon as={MdOpenInBrowser} w={8} h={8} color={'blue'} /></a>}
        </Box>
      </Flex>
    </Grid>
  );
};

export default ProjectCard;
