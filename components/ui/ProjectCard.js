import { Box, Button, Grid, Heading, Image } from "@chakra-ui/react";
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
        fontSize={['2rem', '4rem', '1rem', '1rem', '2rem', '2.7rem']}
        color='#fff'
        className={classes.title}
        justifySelf={"top"}
        gridColumnStart={1}
        gridColumnEnd={2}
        gridRowStart={1}
        gridRowEnd={2}
        zIndex={3}
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
        zIndex={2}
      >
        <Button>Github</Button>
        <Button>LiveSite</Button>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
