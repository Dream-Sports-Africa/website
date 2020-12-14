import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ProgramsPage from "../components/programs/programs-page";
import Footer from "../components/footer";

const Programs = () => {
  return (
    <Layout pageTitle="Programs Page || Dream Sports Africa">
      <Header />
      <StickyHeader />
      <PageHeader title="Programs Page" crumbTitle="Programs" />
      <ProgramsPage />
      <Footer />
    </Layout>
  );
};

export default Programs;
