import { Grid, Heading, Box } from '@chakra-ui/react';
import ProjectCard from './ui/ProjectCard';

const Projects = props => {
  return (
    <section>
      <Heading as='h2'>Projects</Heading>
      <Grid gap='1rem' templateRows='1fr' templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']}>
        <Box gridRowStart={1} gridRowEnd={3}>
          <ProjectCard image='/images/calculator.jpg' title='JS Calculator' />
        </Box>
        <ProjectCard image='/images/agency-landing-page.png' title='Agency Landing Page' gridColumnStart={1} gridColumnEnd={2} />
        <ProjectCard image='/images/trip_book.png' title='trip book' />
        <ProjectCard image='/images/trip_book.png' title='trip book' />
        <ProjectCard image='/images/trip_book.png' title='trip book' />
        <ProjectCard image='/images/trip_book.png' title='trip book' />
      </Grid>
    </section>
  );
};

export default Projects;