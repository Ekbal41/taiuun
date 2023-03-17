import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import {
  FcApproval,
  FcDocument,
  FcEditImage,
  FcElectronics,
  FcPhoneAndroid,
  FcSelfServiceKiosk,
} from "react-icons/fc";

function WhyUs() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
       
        bg={colorMode === "light" ? "white" : "#1a202c"}
        color={colorMode === "light" ? "" : "gray.200"}
      >
        <Container maxW={1400} py={12} mx={"auto"}>
          <Flex
            justifyContent={"center"}
            flexDir={"column"}
            alignItems={"center"}
            flexWrap={"wrap"}
            marginBottom={24}
            marginTop={8}
          >
            <Heading mb={4}  textTransform={"uppercase"}letterSpacing={{base:4,md:10}}>Features</Heading>
            <Text as="p" fontSize={"xl"} textAlign={"center"}>
              With over 12 years of experience, we achieve customer satisfaction
              by following the features built into each template.
            </Text>
          </Flex>
          <Flex my={8} flexDir={{ base: "column", md: "row" }}>
            <Flex
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              gap={4}
              p={4}
            >
              <FcPhoneAndroid size={60} />
              <Text fontWeight={"bold"} fontSize={"2xl"} color={"blue.500"}>
                Fully Responsive
              </Text>
              <Text w={{ base: "80%", md: "100%" }} textAlign={"center"}>
                We will provide you latest design trend using bootstrap to
                enable it on every web devices like desktop, tablets or mobiles.
              </Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              gap={4}
              p={4}
            >
              <FcElectronics size={60} />
              <Text fontWeight={"bold"} fontSize={"2xl"} color={"blue.500"}>
                Unique Features
              </Text>
              <Text w={{ base: "80%", md: "100%" }} textAlign={"center"}>
                We will provide you latest design trend using bootstrap to
                enable it on every web devices like desktop, tablets or mobiles.
              </Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              gap={4}
              p={4}
            >
              <FcEditImage size={60} />
              <Text fontWeight={"bold"} fontSize={"2xl"} color={"blue.500"}>
                Modern Design
              </Text>
              <Text w={{ base: "80%", md: "100%" }} textAlign={"center"}>
                We will provide you latest design trend using bootstrap to
                enable it on every web devices like desktop, tablets or mobiles.
              </Text>
            </Flex>
          </Flex>
          <Flex my={8} flexDir={{ base: "column", md: "row" }}>
            <Flex
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              gap={4}
              p={4}
            >
              <FcDocument size={60} />
              <Text fontWeight={"bold"} fontSize={"2xl"} color={"blue.500"}>
                Well Documentation
              </Text>
              <Text w={{ base: "80%", md: "100%" }} textAlign={"center"}>
                We will provide you latest design trend using bootstrap to
                enable it on every web devices like desktop, tablets or mobiles.
              </Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              gap={4}
              p={4}
            >
              <FcApproval size={60} />
              <Text fontWeight={"bold"} fontSize={"2xl"} color={"blue.500"}>
                Great support
              </Text>
              <Text w={{ base: "80%", md: "100%" }} textAlign={"center"}>
                We will provide you latest design trend using bootstrap to
                enable it on every web devices like desktop, tablets or mobiles.
              </Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              gap={4}
              p={4}
            >
              <FcSelfServiceKiosk size={60} />
              <Text fontWeight={"bold"} fontSize={"2xl"} color={"blue.500"}>
                Browser Compatibility
              </Text>
              <Text w={{ base: "80%", md: "100%" }} textAlign={"center"}>
                We will provide you latest design trend using bootstrap to
                enable it on every web devices like desktop, tablets or mobiles.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default WhyUs;
