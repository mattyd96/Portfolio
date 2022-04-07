import { Grid, Heading, Box, Text, Fade } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// import images
import techBlog from '../../public/images/tech-blog-mobile.png';
import agencyPage from '../../public/images/agency-landing-page.png';
import calculator from '../../public/images/calculator.jpg';
import tripBook from '../../public/images/trip-book.png';
import weatherDash from '../../public/images/weather-dashboard.png'
import employeeTracker from '../../public/images/employee-tracker.png'
import quiz from '../../public/images/javascript-quiz.png'

// temp holding place for project data -> currently figuring out best solution for this
import projects from "../../data/projects.json";
//let projects = require("../../data/projects.json");

const Projects = (props) => {
  return (
    <section>
      {/* Grid Section */}
      <Grid
        gap="1rem"
        templateRows="1fr"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        mt="2rem"
      >
        {/* Heading title */}

        <Box
          as={motion.div}
          gridColumn={[1, 1, 2]}
          gridRowStart={1}
          gridRowEnd={2}
          alignSelf="top"
          justifySelf={"center"}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 10 }}
        >
          <Heading
            as="h2"
            fontSize={["4rem", "5rem", "6rem", "7rem", "9rem"]}
            display={"flex"}
            flexDirection={["row", "row", "row", "column"]}
            lineHeight={["6rem", "7rem"]}
          >
            <Text as={"span"}>Pro</Text>
            <Text as={"span"}>jects</Text>
          </Heading>
        </Box>

        {/* Hero Project */}
        <Box gridRowStart={[2, 2, 1]} gridRowEnd={[2, 2, 3]} gridColumn={1}>
          <ProjectCard
            image={techBlog}
            title={projects[0].title}
            website={projects[0].website}
            github={projects[0].github}
            key={projects[0].id}
          />
        </Box>

        {/* Remaining Projects */}
        <ProjectCard
          image={agencyPage}
          title={projects[1].title}
          website={projects[1].website}
          github={projects[1].github}
          key={projects[1].id}
        />
        <ProjectCard
          image={calculator}
          title={projects[2].title}
          website={projects[2].website}
          github={projects[2].github}
          key={projects[2].id}
        />
        <ProjectCard
          image={tripBook}
          title={projects[3].title}
          website={projects[3].website}
          github={projects[3].github}
          key={projects[3].id}
        />
        <ProjectCard
          image={weatherDash}
          title={projects[4].title}
          website={projects[4].website}
          github={projects[4].github}
          key={projects[4].id}
        />
        <ProjectCard
          image={employeeTracker}
          title={projects[5].title}
          website={projects[5].website}
          github={projects[5].github}
          key={projects[5].id}
        />
        <ProjectCard
          image={quiz}
          title={projects[6].title}
          website={projects[6].website}
          github={projects[6].github}
          key={projects[6].id}
        />
      </Grid>
    </section>
  );
};

export default Projects;
