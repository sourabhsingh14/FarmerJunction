import { Box } from "@chakra-ui/layout";
import React from "react";
import Head from "next/head";
import Header from "../../components/kisanMandi/Navbars/Header";
import StickyHeader from "../../components/LandingPage/StickyHeader";

const index = () => {
  return (
    <Box>
      <Head>
        <title>The Kisan Mandi</title>

        <link rel="icon" href="mandi.png" />
      </Head>
      <Header />
      <StickyHeader />
    </Box>
  );
};

export default index;
