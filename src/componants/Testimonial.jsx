import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export default function Testimonial() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        justifyContent={"center"}
        flexDir={"column"}
        alignItems={"center"}
        flexWrap={"wrap"}
        py={24}
        px={{ base: 0, md: 24 }}
        bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
        color={colorMode === "light" ? "" : "gray.200"}
      >
        <Heading
          mb={4}
          textTransform={"uppercase"}
          letterSpacing={{ base: 4, md: 10 }}
        >
          Testimonials
        </Heading>
        <Box px={{base: 12,}}>
          <Text fontSize={"xl"}>
            Our templates are Trusted by 8,500 Customers Worldwide.
          </Text>
        </Box>
      </Flex>
      <Swiper
        bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
        color={colorMode === "light" ? "" : "gray.200"}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
         
            bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
            color={colorMode === "light" ? "" : "gray.200"}
            rounded="md"
            padding={14}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "100%", md: "50%" }} >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate. Obcaecati repudiandae
              impedit omnis a ratione quae. Asperiores consequuntur alias
              repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
            color={colorMode === "light" ? "" : "gray.200"}
            rounded="md"
            padding={14}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "100%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate. Obcaecati repudiandae
              impedit omnis a ratione quae. Asperiores consequuntur alias
              repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
            color={colorMode === "light" ? "" : "gray.200"}
            rounded="md"
            padding={14}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "100%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate. Obcaecati repudiandae
              impedit omnis a ratione quae. Asperiores consequuntur alias
              repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
            color={colorMode === "light" ? "" : "gray.200"}
            rounded="md"
            padding={14}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "100%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate. Obcaecati repudiandae
              impedit omnis a ratione quae. Asperiores consequuntur alias
              repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
            color={colorMode === "light" ? "" : "gray.200"}
            rounded="md"
            padding={14}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "100%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate. Obcaecati repudiandae
              impedit omnis a ratione quae. Asperiores consequuntur alias
              repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
            color={colorMode === "light" ? "" : "gray.200"}
            rounded="md"
            padding={14}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "100%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate. Obcaecati repudiandae
              impedit omnis a ratione quae. Asperiores consequuntur alias
              repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
            color={colorMode === "light" ? "" : "gray.200"}
            rounded="md"
            padding={14}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "100%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate. Obcaecati repudiandae
              impedit omnis a ratione quae. Asperiores consequuntur alias
              repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}
            color={colorMode === "light" ? "" : "gray.200"}
            rounded="md"
            padding={14}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "100%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate. Obcaecati repudiandae
              impedit omnis a ratione quae. Asperiores consequuntur alias
              repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
      <Box h={100} bg={colorMode === "light" ? "#f8f9fa" : "#1a202c"}></Box>
    </>
  );
}
