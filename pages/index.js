import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'

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
