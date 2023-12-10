import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Contattaci from "../components/contattaci";

export default function ContattaciPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Openspace - Contattaci`}</title>
        </Head>
        <Container>
          <Contattaci />
        </Container>
      </Layout>
    </>
  );
}
