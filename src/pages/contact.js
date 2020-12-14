import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GoogleMap from "../components/google-map";
import ContactFormOne from "../components/contact/contact-form-one";
import ContactCardCarousel from "../components/contact/contact-card-carousel";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <Layout pageTitle="Contact Page || Dream Sports Africa">
      <Header />
      <StickyHeader />
      <PageHeader title="Contact Page" crumbTitle="Contact Us" />
      <ContactFormOne />
      <ContactCardCarousel />
      <GoogleMap extraClass="contact" />
      <Footer />
    </Layout>
  );
};

export default Contact;
