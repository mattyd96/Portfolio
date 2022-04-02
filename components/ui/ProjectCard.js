import { Box, Button, Grid, Heading, Image } from "@chakra-ui/react";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <Grid
      className={classes.card}
      minH={"15rem"}
      height={'100%'}
      boxShadow="md"
      rounded='md'
      overflow={'hidden'}
      templateColumns="1fr"
      _hover={{ cursor: "pointer" }}
    >
      <Image
        src={props.image}
        className={classes.bgImage}
        gridColumnStart={1}
        gridColumnEnd={2}
        gridRowStart={1}
        gridRowEnd={2}
        boxSize="100%"
        objectFit="cover"
        zIndex={1}
      ></Image>
      <Heading
        as="h3"
        className={classes.title}
        justifySelf={"top"}
        gridColumnStart={1}
        gridColumnEnd={2}
        gridRowStart={1}
        gridRowEnd={2}
        zIndex={2}
        py={'1rem'}
        px={'2rem'}
      >
        {props.title}
      </Heading>
      <Box
        className={classes.btns}
        gridColumnStart={1}
        gridColumnEnd={2}
        gridRowStart={1}
        gridRowEnd={2}
        zIndex={3}
        //bg='hsla(0,0%,0%, .25)'
      >
        <Button>Github</Button>
        <Button>LiveSite</Button>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
