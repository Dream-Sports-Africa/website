import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import VolunteerForm from "../components/team/volunteer-form";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";

const BecomeVolunteer = () => {
  return (
    <Layout pageTitle="Become a Volunteer || Dream Sports Africa">
      <Header />
      <StickyHeader />
      <PageHeader title="Become a Volunteer" crumbTitle="Become Volunteer" />
      <VolunteerForm />
      <BrandCarousel extraClass="client-carousel__has-border-top" />
      <Footer />
    </Layout>
  );
};

export default BecomeVolunteer;
