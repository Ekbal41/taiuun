import { Container, Flex, Heading, Text, Box ,useColorMode} from "@chakra-ui/react";
import React from "react";

function Counts() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box  bg={colorMode === "light" ? "white" : "#1a202c"}  color={colorMode === "light" ? "" : "gray.200"} py={12}>
        <Container maxW={"70%"} py={12}>
          <Flex gap={{base: 12, md:"0"}}  alignItems={"center"}  justifyContent={"space-between"} flexDir={{base:"column", md:"row"}}>
            <Flex
              justifyContent={"center"}
              flexDir="column"
              alignItems={"center"}
              gap={2}
             
            >
              <Heading color={"blue.500"}fontSize={"6xl"}>675+</Heading>
              <Text>Themes & Templates</Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              flexDir="column"
              alignItems={"center"}
              gap={2}
            >
              <Heading color={"blue.500"} fontSize={"6xl"}>75+</Heading>
              <Text>Years Experiance</Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              flexDir="column"
              alignItems={"center"}
              gap={2}
            >
              <Heading color={"blue.500"}fontSize={"6xl"}>4675+</Heading>
              <Text>Happy Customers</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>

    </>
  );
}

export default Counts;
