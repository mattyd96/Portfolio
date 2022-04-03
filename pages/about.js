import { Box, Image, Text } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <section>
      <Box>
        <Box>
          <Image></Image>
        </Box>
        <Text>
          About Me
        </Text>
      </Box>
      <Box>
        <Text>
        Hello! I am a starting Web developer based in Adelaide, Australia. Having graduated from the University of Adelaide with a Bachelor of Computer Science (Artificial Intellegence), 
        and I hope to apply these skills to this space. I have only scratched the surface of what you can do with Front-end development, but am eager to learn more and become proficient 
        in the Full-stack. My skills include programming experience with HTML, CSS, Javascript, Python, and c++ with a little bit of experimentation with Node.js and Solidity. In future 
        projects I am hoping to build some applications on the block-chain so please look forward to them! 
        </Text>
      </Box>
    </section>
  );
};

export default AboutPage;