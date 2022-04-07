import { Fragment } from "react";
import Head from "next/head";
import About from "../components/About";


const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About Matthew</title>
        <meta name="description" content="About Matthew Durflinger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </Fragment>
  );
};

export default AboutPage;
