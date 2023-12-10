import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

import OpenspaceHome from "../components/openspace-home";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Benvenuti a Openspace!`}</title>
        </Head>
        <Container>
          <OpenspaceHome />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    // "title",
    // "date",
    // "slug",
    // "author",
    // "coverImage",
    // "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
