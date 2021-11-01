import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  List,
  ListItem,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  Stack,
  HStack,
  VStack,
  Divider,
  Center,
  Circle,
  SimpleGrid,
  Image,
  Avatar,
  extendTheme
} from '@chakra-ui/react';
import "@fontsource/mulish";
import Lottie from "lottie-react";
import { Search2Icon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import HeaderLottie from "./HeaderLottie.json";
import RiderLottie from "./RiderLottie.json";
import BikeOne from "./bikeOne.png";
import BikeTwo from "./bikeTwo.png";
import AvatarImage from "./avatar.png";
import BGVector from "./Vector.png";
import BGVectorTwo from "./VectorTwo.png";

const theme = extendTheme({
  fonts: {
    heading: "Mulish",
    body: "Mulish",
  },
});

const bikes = [
  { title: 'Universal eBike Kit', price: '$750.00' },
  { title: 'Brampoton eBike Kit', price: '$750.00' },
  { title: 'Additional eBike Kit', price: '$750.00', opacity: '0.8' }
];

const otherBikes = [
  { title: 'Hybrid Bikes', active: true },
  { title: 'Fixie Bikes', active: false },
  { title: 'Folding Bikes', active: false },
  { title: 'Mount Bikes', active: false },
  { title: 'City Bikes', active: false }
];

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack textAlign="center" fontSize="xl" bg="#FFFFFF" marginTop="50px">
        <HStack justifyContent="space-around">
          <HStack>
            <Flex
              bg="#FFBD37"
              borderRadius="50%"
              w="41px"
              h="41px"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                color="#FFFFFF"
                fontWeight="700"
                fontStyle="normal"
                fontFamily="Mulish"
                lineHeight="32.63px"
                size="26px"
                textAlign="center"
              >
                B
              </Text>
            </Flex>
            <Box>
              <Text
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="bold"
                fontSize="24px"
                lineHeight="30px"
                color="#233348"
                mixBlendMode="normal"
              >
                eBike
              </Text>
            </Box>
          </HStack>
          <List
            w="40%"
            fontFamily="Mulish"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="18px"
            lineHeight="23px"
          >
            <HStack justifyContent="space-between">
              <ListItem color="#233348">
                <Link>Product</Link>
              </ListItem>
              <ListItem color="#7D7987" opacity="0.5" _hover={{ color: '#233348', opacity: '1' }}>
                <Link>Byke Type</Link>
              </ListItem>
              <ListItem color="#7D7987" opacity="0.5" _hover={{ color: '#233348', opacity: '1' }}>
                <Link>About us</Link>
              </ListItem>
              <ListItem color="#7D7987" opacity="0.5" _hover={{ color: '#233348', opacity: '1' }}>
                <Link>Testimonials</Link>
              </ListItem>
              <ListItem color="#7D7987" opacity="0.5" _hover={{ color: '#233348', opacity: '1' }}>
                <Link>Contact</Link>
              </ListItem>
            </HStack>
          </List>
        </HStack>
        <SimpleGrid columns={3} spacing={6} w="100px" padding="20px">
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
          <Circle size="11px" bg="#FFE8B9" color="white" />
        </SimpleGrid>
        <HStack justifyContent="space-around" padding="0 200px" alignItems="end">
          <Stack w="50%" alignItems="start">
            <Heading
              fontFamily="Mulish"
              fontStyle="normal"
              fontWeight="bold"
              fontSize="48px"
              lineHeight="56px"
              color="#233348"
              mixBlendMode="normal"
              textAlign="left"
              marginBottom="10px"
            >
              Your Bike <br /> Electric Update
            </Heading>
            <Text
              fontFamily="Mulish"
              fontStyle="normal"
              fontWeight="300"
              fontSize="21px"
              lineHeight="32px"
              color="#7D7987"
              mixBlendMode="normal"
              textAlign="left"
              paddingBottom="20px"
            >
              Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone
            </Text>
            <InputGroup
              border="1px solid #C2CFE0"
              boxSizing="border-box"
              borderRadius="100px"
              padding="5px"
            >
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="#C2CFE0" marginTop="10px" />}
              />
              <Input border="none" placeholder="Search Bike or anything" />
              <Button
                bgGradient="linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #FFBD37 100%)"
                borderRadius="100px"
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="600"
                fontSize="14px"
                lineHeight="18px"
                letterSpacing="0.01em"
                color="#000000"
                w="150px"
              >
                Find
              </Button>
            </InputGroup>
          </Stack>
          <Stack w="40%">
            <Lottie animationData={HeaderLottie} />
          </Stack>
        </HStack>
        <Box>
          <Image src={BGVector} pos="absolute" w="40%" marginTop="100px" />
          <Stack>
            <SimpleGrid
              minChildWidth="120px"
              spacing="40px"
              marginLeft="200px"
              marginTop="100px"
              zIndex="2"
            >
              {bikes.map((bike) => (
                <Box
                  width="382.2px"
                  height="386.23px"
                  bg="#FFFFFF"
                  boxShadow="10px 24px 54px rgba(0, 0, 0, 0.06)"
                  borderRadius="20px"
                  padding="30px"
                  opacity={bike.opacity}
                >
                  <Heading
                    fontFamily="Mulish"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="20px"
                    lineHeight="25px"
                    color="#233348"
                    mixBlendMode="normal"
                    textAlign="left"
                  >
                    {bike.title}
                  </Heading>
                  <Center>
                    <Image src={BikeOne} />
                  </Center>
                  <Divider border="1px solid #C2CFE0" transform="matrix(1, 0, 0, 1, 0, 0)" />
                  <HStack justifyContent="space-between" alignItems="end">
                    <VStack alignItems="flex-start" marginTop="20px">
                      <Text
                        fontFamily="Mulish"
                        fontStyle="normal"
                        fontWeight="normal"
                        fontSize="16px"
                        lineHeight="20px"
                        color="#7D7987"
                        mixBlendMode="normal"
                      >
                        Price
                      </Text>
                      <Text
                        fontFamily="Mulish"
                        fontStyle="normal"
                        fontWeight="bold"
                        fontSize="20px"
                        lineHeight="25px"
                        color="#233348"
                      >
                        {bike.price}
                      </Text>
                    </VStack>
                    <Button
                      bgGradient="linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #FFBD37 100%)"
                      borderRadius="100px"
                      fontFamily="Mulish"
                      fontStyle="normal"
                      fontWeight="600"
                      fontSize="14px"
                      lineHeight="18px"
                      letterSpacing="0.01em"
                      color="#233348"
                      w="100px"
                    >
                      Order
                    </Button>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
            <Stack direction="row" spacing={4} justifyContent="flex-end" paddingRight="270px">
              <Button
                leftIcon={<ArrowBackIcon />}
                width="48px"
                height="48px"
                bgGradient="linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #FFE8B9 100%)"
                borderRadius="100px"
                color="#233348"
                fontSize="30px"
              />
              <Button
                leftIcon={<ArrowForwardIcon />}
                width="48px"
                height="48px"
                bgGradient="linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #FFBD37 100%)"
                borderRadius="100px"
                color="#233348"
                fontSize="30px"
              />
            </Stack>
          </Stack>
        </Box>
        <Stack>
          <SimpleGrid
            minChildWidth="120px"
            spacing="40px"
            marginLeft="200px"
            marginTop="100px"
            bg="#FFFFFF"
          >
            {otherBikes.map((bike) => (
              <Box>
                <Box
                  width="227px"
                  height="117px"
                  border={bike.active && '2px solid #FCB72B'}
                  boxShadow={bike.active ? '' : '10px 24px 54px rgba(0, 0, 0, 0.06)'}
                  borderRadius="10px"
                  opacity={1}
                  bg="#FFFFFF"
                >
                  <Center>
                    <Image src={BikeTwo} />
                  </Center>
                </Box>
                <Text
                  paddingTop="15px"
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="20px"
                  color={bike.active ? '#FCB72B' : '#233348'}
                >
                  {bike.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
        <Box>
          <Stack alignItems="end">
            <Image src={BGVectorTwo} pos="absolute" w="40%" marginTop="100px" />
          </Stack>
          <HStack
            justifyContent="space-around"
            padding="100px 200px"
            alignItems="center"
            zIndex="2"
          >
            <Stack w="40%" zIndex="2">
              <Box
                width="382.2px"
                // height="386.23px"
                bg="#FFFFFF"
                boxShadow="10px 24px 54px rgba(0, 0, 0, 0.06)"
                borderRadius="20px"
                padding="30px"
                zIndex="2"
              >
                <Center>
                  <Lottie animationData={RiderLottie} />
                </Center>
                <Divider border="1px solid #C2CFE0" transform="matrix(1, 0, 0, 1, 0, 0)" />
                <HStack justifyContent="space-between" alignItems="end">
                  <VStack alignItems="flex-start">
                    <Text
                      fontFamily="Mulish"
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="16px"
                      lineHeight="20px"
                      color="#7D7987"
                      mixBlendMode="normal"
                    >
                      Price
                    </Text>
                    <Text
                      fontFamily="Mulish"
                      fontStyle="normal"
                      fontWeight="bold"
                      fontSize="20px"
                      lineHeight="25px"
                      color="#233348"
                    >
                      $750.00
                    </Text>
                  </VStack>
                  <Button
                    bgGradient="linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #FFBD37 100%)"
                    borderRadius="100px"
                    fontFamily="Mulish"
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="14px"
                    lineHeight="18px"
                    letterSpacing="0.01em"
                    color="#233348"
                    w="100px"
                  >
                    Order
                  </Button>
                </HStack>
              </Box>
            </Stack>
            <Stack w="50%" alignItems="start" zIndex="2">
              <Heading
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="bold"
                fontSize="48px"
                lineHeight="56px"
                color="#233348"
                mixBlendMode="normal"
                textAlign="left"
                marginBottom="10px"
                zIndex="2"
              >
                Hybrid Bikes
              </Heading>
              <Text
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="300"
                fontSize="21px"
                lineHeight="32px"
                color="#7D7987"
                mixBlendMode="normal"
                textAlign="left"
                paddingBottom="20px"
              >
                Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone
              </Text>
              <Button
                variant="outline"
                borderRadius="100px"
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="600"
                fontSize="14px"
                lineHeight="18px"
                letterSpacing="0.01em"
                color="#FFBD37"
                borderColor="#FFBD37"
                w="150px"
              >
                Learn more
              </Button>
            </Stack>
          </HStack>
        </Box>
        <VStack
          width="895px"
          height="425px"
          bg="#FCB72B"
          borderRadius="10px"
          alignSelf="center"
          justifyContent="center"
          padding="50px 100px"
        >
          <Stack alignItems="end" alignSelf="end">
          <SimpleGrid columns={5} spacing={8} w="100px" marginTop="-70px">
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
          </SimpleGrid>
        </Stack>
          <Heading
            fontFamily="Mulish"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="36px"
            lineHeight="48px"
            color="#FFFFFF"
            mixBlendMode="normal"
          >
            What our customers are saying
          </Heading>
          <Divider
            width="56px"
            height="2px"      
            bg="#FFFFFF"
            borderRadius="6px"
          />
          <HStack justifyContent="space-around">
            <VStack w="40%">
              <Avatar src={AvatarImage} border="2px solid #FFFFFF" size="xl" />
              <Text
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="bold"
                fontSize="22px"
                lineHeight="48px"
                color="#FFFFFF"
                mixBlendMode="normal"
              >
                Edward Newgate
              </Text>
              <Text
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="18px"
                lineHeight="18px"
                color="#FFFFFF"
                mixBlendMode="normal"
              >
                Pro-Cycler
              </Text>
            </VStack>
            <Box w="60%">
              <Text
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="19px"
                lineHeight="30px"
                color="rgba(255, 255, 255, 0.9)"
                mixBlendMode="normal"
                textAlign="left"
              >
                Dummy Text patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
              </Text>
            </Box>
          </HStack>
        </VStack>
        <HStack
          alignSelf="center"
          justifyContent="space-evenly"
          w="30%"
          padding="20px"
        >
          <Button
            color="#FFBE3B"
            variant="ghost"
            leftIcon={<ArrowBackIcon />}
            size="xl"
            opacity="0.3"
          />
          <HStack>
            <Circle size="5px" bg="#FFBE3B" color="white" />
            <Circle size="5px" bg="#FFBE3B" color="white" opacity="0.3" />
            <Circle size="5px" bg="#FFBE3B" color="white" opacity="0.3" />
            <Circle size="5px" bg="#FFBE3B" color="white" opacity="0.3" />
          </HStack>
          <Button
            color="#FFBE3B"
            variant="ghost"
            leftIcon={<ArrowForwardIcon />}
            size="xl"
          />
        </HStack>
        <Stack alignItems="end">
          <SimpleGrid columns={5} spacing={8} w="100px" padding="20px 0">
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
            <Circle size="11px" bg="#FFE8B9" color="white" />
          </SimpleGrid>
        </Stack>
        <Stack
          width="100%"
          height="432px"
          bg="#FCB72B"
          justifyContent="space-around"
          padding="250px"
          pos="relative"
        >
          <HStack>
            <Stack w="50%">
              <HStack>
                <Flex
                  bg="#FFFFFF"
                  borderRadius="50%"
                  w="41px"
                  h="41px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    color="#FFBD37"
                    fontWeight="700"
                    fontStyle="normal"
                    fontFamily="Mulish"
                    lineHeight="32.63px"
                    size="26px"
                    textAlign="center"
                  >
                    B
                  </Text>
                </Flex>
                <Box>
                  <Text
                    fontFamily="Mulish"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="24px"
                    lineHeight="30px"
                    color="#FFFFFF"
                    mixBlendMode="normal"
                  >
                    eBike
                  </Text>
                </Box>
              </HStack>
              <Text
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="300"
                fontSize="18px"
                lineHeight="28px" 
                color="#FFFFFF"
                mixBlendMode="normal"
                textAlign="left"
                paddingBottom="50px"
              >
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
              </Text>
              <Text
                fontFamily="Mulish"
                fontStyle="normal"
                fontWeight="300"
                fontSize="16px"
                lineHeight="28px" 
                color="#FFFFFF"
                mixBlendMode="normal"
                textAlign="left"
              >
                ©eBike 2021. All rights reserved
              </Text>
            </Stack>
            <HStack w="50%" justifyContent="space-around">
              <Stack alignItems="start">
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="20px"
                  lineHeight="60px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  Company
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="300"
                  fontSize="18px"
                  lineHeight="38px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  Product
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="300"
                  fontSize="18px"
                  lineHeight="38px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  Bike Type
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="300"
                  fontSize="18px"
                  lineHeight="38px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  About us
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="300"
                  fontSize="18px"
                  lineHeight="38px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  Contact
                </Text>
              </Stack>
              <Stack alignItems="start">
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="20px"
                  lineHeight="60px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  Help
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="300"
                  fontSize="18px"
                  lineHeight="38px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  Help Center
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="300"
                  fontSize="18px"
                  lineHeight="38px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  Contact Support
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="300"
                  fontSize="18px"
                  lineHeight="38px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  Instructions
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontStyle="normal"
                  fontWeight="300"
                  fontSize="18px"
                  lineHeight="38px" 
                  color="#FFFFFF"
                  mixBlendMode="normal"
                >
                  How It Works
                </Text>
              </Stack>
            </HStack>
          </HStack>
          <Stack
            alignItems="start"
            alignSelf="start"
            pos="absolute"
            bottom="10px"
            left="20px"
          >
            <SimpleGrid columns={1} spacing={8} w="100px">
              <Circle size="11px" bg="#FFE8B9" color="white" />
              <Circle size="11px" bg="#FFE8B9" color="white" />
              <Circle size="11px" bg="#FFE8B9" color="white" />
              <Circle size="11px" bg="#FFE8B9" color="white" />
            </SimpleGrid>
          </Stack>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
