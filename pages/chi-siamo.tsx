import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import OpenspaceHome from "../components/openspace-home";
import ChiSiamo from "../components/chi-siamo";

export default function ChiSiamoPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Openspace - Chi Siamo`}</title>
        </Head>
        <Container>
          <ChiSiamo />
        </Container>
      </Layout>
    </>
  );
}
