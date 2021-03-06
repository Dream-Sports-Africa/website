import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CauseContent from "../components/programs/program-content";
import Footer from "../components/footer";

const CauseDetails = () => {
  return (
    <Layout pageTitle="Program Details || Dream Sports Africa">
      <Header />
      <StickyHeader />
      <PageHeader title="Program Details" crumbTitle="Program Details" />
      <CauseContent />
      <Footer />
    </Layout>
  );
};

export default CauseDetails;
