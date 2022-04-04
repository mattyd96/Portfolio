import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Matthew's Portfolio</title>
        <meta name="description" content="Matthew Durflinger's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Box>
  )
}
