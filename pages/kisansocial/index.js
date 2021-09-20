import { Box } from "@chakra-ui/layout";
import React from "react";
import Head from "next/head";
import Header from "../../components/kisanSocial/Navbars/Header";
import StickyHeader from "../../components/LandingPage/StickyHeader";
import Home from "../../components/kisanSocial/Home";
const index = () => {
  return (
    <Box>
      <Head>
        <title>The Kisan Social</title>

        <link rel="icon" href="social.png" />
      </Head>
      <Header />

      <StickyHeader />
      <Home />
    </Box>
  );
};

export default index;
