import {
  Box,
  Flex,
  HStack,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import TwitterIcon from "../assets/icons8-twitter.svg";
import FbIcon from "../assets/icons8-facebook.svg";
import InstaIcon from "../assets/icons8-instagram.svg";
import GithubIcon from "../assets/icons8-github-56.png";

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
        color={colorMode === "light" ? "" : "gray.200"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={6}
        py={10}
      >
        <Box>
          <Flex gap={4} fontWeight={500}>
            <Text label="Facebook">About Us |</Text>
            <Text label="Twitter">Licensing |</Text>
            <Text label="Instagram">Contact Us</Text>
          </Flex>
        </Box>
        <Flex
          gap={1}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontWeight={500}>Copyright © 2023, All Rights Reserved </Text>
          <Text color={"blue.500"}> ByTaiuun.</Text>
        </Flex>
        <HStack spacing="24px">
          <Tooltip label="Twitter" placement="left-end">
            <span class="bt-icon">
              {/* <i class="bi bi-twitter"></i> */}
              <img style={{ height: 30 }} src={TwitterIcon} />
            </span>
          </Tooltip>
          <Tooltip label="Facebook" placement="bottom-end">
            <span class="bt-icon">
              {/* <i class="bi bi-facebook"></i> */}
              <img style={{ height: 30 }} src={FbIcon} />
            </span>
          </Tooltip>

          <Tooltip label="Instagram" placement="bottom-end">
            <span class="bt-icon">
              {/* <i class="bi bi-instagram"></i> */}
              <img style={{ height: 30 }} src={InstaIcon} />
            </span>
          </Tooltip>

          <Tooltip label="Github" placement="right-end">
            <span class="bt-icon">
              {/* <i class="bi bi-github"></i> */}
              <img style={{ height: 30 }} src={GithubIcon} />
            </span>
          </Tooltip>
        </HStack>
      </Flex>
    </>
  );
}

export default Footer;
