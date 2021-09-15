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
        justifyContent={["center", "space-between"]}
        alignItems="center"
        borderBottom="1px"
        borderBottomColor="gray.100"
      >
        <Box
          ml={10}
          display={["none", "flex"]}
          flex="0.3"
          justifyContent="space-around"
        >
          <Text mx={5}>
            English <ChevronDownIcon />
          </Text>
          <Text>
            USD <ChevronDownIcon />
          </Text>
        </Box>
        <Image h="20vh" src={"logo.png"} />
        <Box
          mr={10}
          display={["none", "flex"]}
          flex="0.3"
          justifyContent="space-around"
        >
          <BellIcon mx={5} />
          <DragHandleIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
