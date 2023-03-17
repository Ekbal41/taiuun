import {
  ExternalLinkIcon,
  MoonIcon,
  SunIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";

import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useDisclosure,
  useColorMode,
  IconButton,
  Image,
  MenuGroup,
  MenuDivider,
  Spacer,
  Link,
} from "@chakra-ui/react";

import React from "react";
import Asif from "../assets/asif.png";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const handleClick = () => {
    onOpen();
  };
  return (
    <>
      <Container
        maxW="100%"
        bg={colorMode === "light" ? "white" : "#1c1c1c"}
        py={3}
        color={colorMode === "light" ? "" : "gray.200"}
        position="fixed"
        zIndex={100}
      >
        <Box p={4} maxW="100%">
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text
                fontWeight={"bold"}
                textTransform={"uppercase"}
                fontSize={20}
                paddingTop={2}
              >
                Taiuun
              </Text>
            </Box>
            <Box display={{ base: "none", md: "block" }} paddingTop={2}>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Text mx={3} fontWeight={"bold"}>
                  Home
                </Text>
                <Text mx={3} fontWeight={"bold"}>
                  About Us
                </Text>

                <Menu>
                  <MenuButton mx={3} fontWeight={"bold"}>
                    Works ⇵
                  </MenuButton>
                  <MenuList>
                    <MenuItem as="a" href="#" fontWeight={"bold"}>
                      Facebook
                    </MenuItem>
                    <MenuItem as="a" href="#" fontWeight={"bold"}>
                      Email
                    </MenuItem>
                    <MenuItem as="a" href="#" fontWeight={"bold"}>
                      Facebook
                    </MenuItem>
                    <MenuItem as="a" href="#" fontWeight={"bold"}>
                      Email
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Text mx={3} fontWeight={"bold"}>
                  Contact Us
                </Text>
              </Flex>
            </Box>

            {/* <HStack spacing="24px" display={{ base: "none", md: "block" }}>
              <Tooltip label="Facebook" placement="bottom-end">
                <i class="bi bi-facebook"></i>
              </Tooltip>
              <Tooltip label="Twitter" placement="bottom-end">
                <i class="bi bi-twitter"></i>
              </Tooltip>
              <Tooltip label="Instagram" placement="bottom-end">
                <i class="bi bi-instagram"></i>
              </Tooltip>

              <Tooltip label="Github" placement="bottom-end">
                <i class="bi bi-github"></i>
              </Tooltip>
            </HStack> */}
            <Flex>
              {" "}
              {/* <IconButton
                onClick={toggleColorMode}
                aria-label="Color Mode toggle"
                icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
                mx={2}
              /> */}
              <Menu>
                <MenuButton>
                  <Image
                    borderRadius="full"
                    boxSize="40px"
                    src={Asif}
                    alt="Dan Abramov"
                  />
                </MenuButton>

                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem onClick={toggleColorMode}>
                      {colorMode === "light" ? "Dark Mode" : "Light Mode"}{" "}
                      <Spacer />{" "}
                      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Socials">
                    <MenuItem
                      as={Link}
                      _hover={{
                        textDecoration: "none",
                        border: "none",
                        shadow: "none",
                      }}
                      
                      href={"https://github.com/Ekbal41"}
                    >
                      Github <Spacer /> <ExternalLinkIcon />
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      _hover={{
                        textDecoration: "none",
                        border: "none",
                        shadow: "none",
                      }}
                      href={"https://facebook.com/Ekbal41"}
                    >
                      Facebook <Spacer /> <ExternalLinkIcon />
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      _hover={{
                        textDecoration: "none",
                        border: "none",
                        shadow: "none",
                      }}
                      href={"https://twitter.com/Ekbal41"}
                    >
                      Twitter <Spacer /> <ExternalLinkIcon />
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      _hover={{
                        textDecoration: "none",

                        border: "none",
                        shadow: "none",
                      }}
                      href={"https://www.linkedin.com/in/ekbal41/"}
                    >
                      Linkein <Spacer /> <ExternalLinkIcon />
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>

            <Button
              colorScheme="purple"
              variant="ghost"
              display={{ md: "none" }}
              onClick={handleClick}
            >
              <i class="bi bi-three-dots"></i>
            </Button>
          </Flex>
        </Box>
        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          size={"xs"}
          placement={"left"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>TAIUUN</DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                quis varius quam quisque. Massa ultricies mi quis hendrerit
                dolor magna eget est lorem. Erat imperdiet sed euismod nisi
                porta. Lectus vestibulum mattis ullamcorper velit.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  );
}

export default Navbar;
