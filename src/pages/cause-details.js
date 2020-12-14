import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CauseContent from "../components/causes/cause-content";
import Footer from "../components/footer";

const CauseDetails = () => {
  return (
    <Layout pageTitle="Cause Details || Dream Sports Africa">
      <Header />
      <StickyHeader />
      <PageHeader title="Cause Details" crumbTitle="Cause Details" />
      <CauseContent />
      <Footer />
    </Layout>
  );
};

export default CauseDetails;
