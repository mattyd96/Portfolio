import { Box, Button, Grid, Heading, Image, Flex, Spacer, Icon, Text } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { MdOpenInBrowser } from "react-icons/md";
import classes from "./ProjectCard.module.css";

// helper -> opens link to site in a new tab
const gotoSite = site => {
  window.open(site, "_blank");
}

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
          fontSize={['2rem', '3rem', '2rem', '2rem', '2rem', '2.7rem']}
          color='#fff'
        >
          {props.title}
        </Heading>
        <Spacer />
        <Box className={classes.links}>
          <Button onClick={() => gotoSite(props.github)} display={'flex'} gap='.5rem'>
            <Icon as={GoMarkGithub} w={7} h={7}/>
            <Text>Github</Text>
          </Button>
          <Button onClick={() => gotoSite(props.website)}>
            <Icon as={MdOpenInBrowser} w={8} h={8} />
            <Text>Website</Text>
          </Button>
        </Box>
      </Flex>
    </Grid>
  );
};

export default ProjectCard;
