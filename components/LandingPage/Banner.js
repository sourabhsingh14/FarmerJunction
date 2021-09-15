import { Box, Text } from "@chakra-ui/layout";
import { Image, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const Banner = () => {
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
      display="flex"
      h="70vh"
      bgImage={
        !show &&
        "url(https://ishkafarms.com/v1/wp-content/uploads/2016/11/farm-bg-1.jpg)"
      }
      bgRepeat="no-repeat"
      bgPosition="bottom"
      bgSize="contain"
    >
      <Box
        flex="0.5"
        display="flex"
        flexDir="column"
        alignItems="center"
        boxShadow="base"
      >
        <Text fontWeight="bold" fontSize={["2xl", "3xl", "4xl"]} my="10">
          KISAN MANDI
        </Text>
        <Text w="70%" fontSize={["xs", "sm", "md"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse
          saepe suscipit iste voluptas ab dolores inventore reiciendis hic id
          rem architecto non perferendis ut cumque numquam molestias dolorem
          odio.
        </Text>
        <Link href="/kisanmandi">
          <Button
            bg="green"
            color="white"
            my={10}
            _hover={{ bgColor: "red.400" }}
          >
            ENTER MANDI
          </Button>
        </Link>
      </Box>
      <Box
        boxShadow="base"
        display="flex"
        flex="0.5"
        flexDir="column"
        alignItems="center"
      >
        <Text fontWeight="bold" my="10" fontSize={["2xl", "3xl", "4xl"]}>
          KISAN SOCIAL
        </Text>
        <Text w="70%" fontSize={["xs", "sm", "md"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse
          saepe suscipit iste voluptas ab dolores inventore reiciendis hic id
          rem architecto non perferendis ut cumque numquam molestias dolorem
          odio.
        </Text>
        <Link href="/kisansocial">
          <Button
            color="white"
            bgColor="green"
            my={10}
            _hover={{ bgColor: "red.400" }}
          >
            GO SOCIAL
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Banner;
