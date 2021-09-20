import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import BlogModal from "./utilities/BlogModal";

const Home = () => {
  return (
    <Box>
      <Image src="socailBanner.png" />
      <Box maxWidth="1200px" my={5} mx="auto">
        <Box my={5}>
          <Text mb={2} fontSize="2xl" fontWeight="bold">
            Trending Blogs..........
          </Text>
          <hr />
        </Box>

        <SimpleGrid columns={2} spacing={"22px"}>
          <BlogModal />
          <BlogModal />
          <BlogModal />
          <BlogModal />
          <BlogModal />
          <BlogModal />
          <BlogModal />
          <BlogModal />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
