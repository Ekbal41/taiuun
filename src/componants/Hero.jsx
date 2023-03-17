import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import HeroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <>
    <Container maxW={1400} pt={20}>
      <Flex justifyContent={{ base:"start" , md:"space-evenly"}} flexDir={{base: "column", md:"row"}}  height={{base: "auto", md:"90vh"}} alignItems={"center"} >
        <Box
       
        w={{base: "100%", md:"50%"}}
        marginTop={{base: "20", md:"0"}}
        >
          <Heading mb={4}>
            Advanced HTML & React Website Templates and Themes to build your
            next projects.
          </Heading>
          <Text fontSize='2xl'>
            Over 9,500 customers are using our HTML and React templates and
            themes from all over the world. It will be easy for customization to
            create the perfect professional layout design and online website.
          </Text>
          
        </Box>
        <Box  w={{base:"100%", md:"50%"}} >
          <Image objectFit="cover" mx={"auto"} src={HeroImage} alt="Hero"  />
        </Box>
      </Flex>
      </Container>
    </>
  );
}

export default Hero;
