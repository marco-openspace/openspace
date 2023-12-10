import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Membership from "../components/membership";

export default function MembershipPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Openspace - Membership`}</title>
        </Head>
        <Container>
          <Membership />
        </Container>
      </Layout>
    </>
  );
}
