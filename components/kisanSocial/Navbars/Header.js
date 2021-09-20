import { Box, Image, Text } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon, DragHandleIcon } from "@chakra-ui/icons";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Box
        position="relative"
        display="flex"
        w="100%"
        justifyContent="center"
        alignItems="center"
        borderBottom="1px"
        borderBottomColor="gray.100"
      >
        <Image h="20vh" src={"social.png"} />
      </Box>
    </Box>
  );
};

export default Header;
