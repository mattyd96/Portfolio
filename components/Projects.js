import { Grid, Heading, Box, Text } from '@chakra-ui/react';
import ProjectCard from './ui/ProjectCard';

const Projects = props => {
  return (
    <section>
      
      <Grid gap='1rem' templateRows='1fr' templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} mt='2rem'>
        <Box gridRowStart={1} gridRowEnd={3} gridColumn={1}>
          <ProjectCard image='/images/calculator.jpg' title='JS Calculator' />
        </Box>
        <ProjectCard image='/images/agency-landing-page.png' title='Agency Landing Page' gridColumnStart={1} gridColumnEnd={2} />
        <ProjectCard image='/images/trip_book.png' title='trip book' />
        <ProjectCard image='/images/trip_book.png' title='trip book' />
        <ProjectCard image='/images/trip_book.png' title='trip book' />
        <ProjectCard image='/images/trip_book.png' title='trip book' />
        <Box gridColumn={2} gridRowStart={1} gridRowEnd={2} alignSelf='center' justifySelf={'center'}>
          <Heading as='h2' fontSize={['4rem','4rem', '6rem', '7rem', '8rem']} display={'flex'} flexDirection={['row', 'row', 'column']} lineHeight={'6rem'}>
            <Text as={'span'}>Pro</Text>
            <Text as={'span'}>jects</Text>
          </Heading>
        </Box>
      </Grid>
    </section>
  );
};

export default Projects;