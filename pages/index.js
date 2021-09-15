import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text, Image } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../components/LandingPage/Banner";
import Header from "../components/LandingPage/Header";
import StickyHeader from "../components/LandingPage/StickyHeader";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box w="100%">
      <Head>
        <title>The Kisan Junction</title>
        <meta name="landing page" content="landing page " />
        <link rel="icon" href="logo.png" />
      </Head>

      <Header />
      <StickyHeader />
      <Banner />
    </Box>
  );
}
