import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import OpenspaceHome from "../components/openspace-home";
import OpenspaceMain from "../components/openspace-main";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Benvenuti a Openspace!`}</title>
        </Head>
        <Container>
          <OpenspaceMain />
          <OpenspaceHome />
        </Container>
        <footer className="w-full flex justify-center">
          <div className="border-t border-slate-400 text-slate-400 py-4 text-center text-sm w-[330px] md:w-[500px]">
            © Copyright {new Date().getFullYear()} {"Openspace APS"}.
          </div>
        </footer>
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
