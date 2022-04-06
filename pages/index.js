import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Matthew&apos;s Portfolio</title>
        <meta name="description" content="Matthew Durflinger&apos;s Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Box>
  );
}
