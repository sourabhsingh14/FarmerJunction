import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";

const BlogModal = () => {
  return (
    <Box display="flex" w="100%" boxShadow="xs" h="258px" w="568px">
      <Image
        w="250px"
        src="https://blog.logrocket.com/wp-content/uploads/2021/09/react-native-sound-tutorial-with-examples-nocdn.png"
        alt="img"
      />
      <Box
        ml={5}
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            HOW TO MAKE RESHU MY GIRLFRIEND
          </Text>
          <Text fontSize="sm" color="gray" mt={3} noOfLines="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsum
            minus. Dolorem porro sint totam necessitatibus, non explicabo error
            incidunt quia architecto ab esse aspernatur accusamus cumque
            cupiditate animi perspiciatis?
          </Text>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <Box
            display="flex"
            flex="0.2"
            h="40px"
            w="40px"
            color="white"
            alignItems="center"
            borderRadius="100%"
            justifyContent="center"
            bgColor="teal.600"
            boxShadow="md"
          >
            R
          </Box>
          <Box flex="0.7" mx={5}>
            <Text fontSize="sm">RESHU SISODIA</Text>
            <Text color="gray.600" fontSize="xs">
              {" "}
              sep 20, 2021 . 6 min ago
            </Text>
          </Box>
          <PlusSquareIcon flex="0.1" ml={2} />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogModal;
