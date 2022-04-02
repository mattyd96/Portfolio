import { Fragment } from "react";
import Head from "next/head";
import Projects from "../../components/Projects";

const ProductsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Matthew's Projects</title>
        <meta name="description" content="Matthew Durflinger's Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
    </Fragment>
  );
};

export default ProductsPage;