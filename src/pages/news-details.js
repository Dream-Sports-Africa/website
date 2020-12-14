import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BlogDetails from "../components/blog-details";
import Footer from "../components/footer";

const NewsDetails = () => {
  return (
    <Layout pageTitle="News Details || Dream Sports Africa">
      <Header />
      <StickyHeader />
      <PageHeader title="News Details" crumbTitle="News" />
      <BlogDetails />
      <Footer />
    </Layout>
  );
};

export default NewsDetails;
