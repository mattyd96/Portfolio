import { Fragment } from "react";
import Head from "next/head";
import Projects from "../../components/projects/Projects";

const ProductsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Matthew&apos;s Projects</title>
        <meta name="description" content="Matthew Durflinger&apos;s Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
    </Fragment>
  );
};

export default ProductsPage;