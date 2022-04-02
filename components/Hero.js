import { Button, Flex, Spacer, Text, Box } from '@chakra-ui/react';

const Hero = () => {
  return (
    <section>
      <Flex direction='column' h='calc(100vh - 3rem)'>
        <Flex mt='2rem' justifyContent={'flex-end'}>
          <Text fontSize={{ base: '2xl', md: '4xl', lg: '5xl'}} fontWeight='300' maxWidth={'70rem'} align='right'>
            Hello! I'm Matthew Durflinger, a CS Graduate with an interest in Web Development. I'm only starting out, but I love learning new skills everyday
            to create fun and appealing applications.
          </Text>
        </Flex>
        <Flex minH={'8rem'} justify='center' alignItems={'center'} gap='3rem' flex='1'>
          <Button>Contact Me</Button>
          <Button>See My Work!</Button>
        </Flex>
        <Box fontSize={{ base: '6xl', md: '8xl'}} fontWeight='800' maxWidth={'31rem'}>
          <Text lineHeight={'3rem'}>FullStack</Text>
          <Text>Developer</Text>
        </Box>
      </Flex>
    </section>
  );
};

export default Hero;