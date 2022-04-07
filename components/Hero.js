import NextLink from 'next/link';
import { Button, Flex, Spacer, Text, Box } from '@chakra-ui/react';

const gotoGithub = () => {
  window.open("https://github.com/mattyd96", "_blank");
}

const Hero = () => {
  return (
    <Flex direction='column' h='calc(100vh - 3rem)'>
      <Flex mt='2rem' justifyContent={'flex-end'}>
        <Text fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl'}} fontWeight='300' maxWidth={'70rem'} align='right'>
          Hello! I'm Matthew Durflinger, a CS Graduate with an interest in Web Development. I'm only starting out, but I love learning new skills everyday
          to create fun and appealing applications.
        </Text>
      </Flex>
      <Flex minH={'8rem'} justify='center' direction={{base: 'column', sm: 'row'}}alignItems={'center'} gap={{base: '1rem', md: '5rem', xl: '7rem'}} flex='1'>
        <NextLink href={'/projects'}>
          <Button h={'5rem'} w={'15rem'} fontSize={{base: '1rem', md: '1.3rem'}} fontWeight={{base: '600', md: '700'}}>See My Work!</Button>
        </NextLink>
        <Button p={0} h={'5rem'} w={'15rem'} onClick={gotoGithub} fontSize={{base: '1rem', md: '1.3rem'}} fontWeight={{base: '600', md: '700'}}>Check out my Github</Button>
      </Flex>
      <Box fontSize={{ base: '6xl', sm: '7xl', md: '8xl'}} fontWeight='800' maxWidth={'31rem'}>
        <Text lineHeight={'3rem'}>FullStack</Text>
        <Text>Developer</Text>
      </Box>
    </Flex>
  );
};

export default Hero;