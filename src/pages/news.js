import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BlogPage from "../components/blog/blog-page";
import Footer from "../components/footer";

const News = () => {
  return (
    <Layout pageTitle="News Page || Dream Sports Africa">
      <Header />
      <StickyHeader />
      <PageHeader title="News Page" crumbTitle="News" />
      <BlogPage />
      <Footer />
    </Layout>
  );
};

export default News;
