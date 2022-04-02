import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matthew's Portfolio</title>
        <meta name="description" content="Matthew Durflinger's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
