import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import TeamPage from "../components/team/team-page";
import Footer from "../components/footer";

const Volunteers = () => {
  return (
    <Layout pageTitle="Our Volunteers || Dream Sports Africa">
      <Header />
      <StickyHeader />
      <PageHeader title="Our Volunteers" crumbTitle="Our Volunteers" />
      <TeamPage />
      <Footer />
    </Layout>
  );
};

export default Volunteers;
