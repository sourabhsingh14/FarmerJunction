import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const StickyHeader = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <Box
      // position="-webkit-sticky"
      position="sticky"
      zIndex="50"
      top="0"
      h="10vh"
      bgColor="white"
      boxShadow={show && "md"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="large"
    >
      <Link href="/">
        <Text m={2}>HOME </Text>
      </Link>
      <Text m={2}>
        SHOP <ChevronDownIcon />
      </Text>
      <Text m={2}>
        BLOG <ChevronDownIcon />
      </Text>
      <Text m={2}>
        CONTACT <ChevronDownIcon />
      </Text>
    </Box>
  );
};

export default StickyHeader;
