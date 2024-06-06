import {
  Box,
  Button,
  Heading,
  Flex,
  useDisclosure,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { MdExplore } from "react-icons/md";
import ContactModal from "./ContactModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      bg="gray.100"
      backgroundImage="url('/BackgroundSVG.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box w="100%">
        <Flex
          align="center"
          justify="center"
          direction="column"
          p={{ base: 3, md: 5 }}
        >
          <Image
            src="https://res.cloudinary.com/dcj2allfp/image/upload/v1717426928/jiikowd6bjkbeicghq9r.png"
            height="16vh"
            transform="rotate(-90deg)"
          />
          <Heading
            as="h1"
            color="teal.600"
            textAlign="center"
            mt={{ base: 5, md: 15 }}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontFamily={"Oswald, sans-serif"}
          >
            Durga Utility Services
          </Heading>
        </Flex>
        <Box textAlign="center" mt={{ base: 10, md: 18 }} px={3}>
          <Heading
            fontWeight="bolder"
            color="teal.700"
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Leading Supplier of <br />
            <Text as="span" color="teal.500">
              High-Quality
            </Text>{" "}
            Boiler Parts and Boiler Chemicals
          </Heading>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 5, md: 10 }}
          align="center"
          justify="center"
          mt={{ base: 10, md: 20 }}
          px={3}
          mb={{ base: 10, md: 0 }}
        >
          <Button
            variant="solid"
            colorScheme="teal"
            size="lg"
            rightIcon={<MdExplore />}
            onClick={() => {
              navigate("/products/list", { replace: false });
            }}
          >
            Explore
          </Button>
          <Button
            variant="outline"
            size="lg"
            _hover={{
              bgColor: "transparent",
              color: "teal.400",
            }}
            colorScheme="teal"
            color="teal.700"
            rightIcon={<FiPhoneCall />}
            onClick={onOpen}
          >
            Contact
          </Button>
        </Stack>
        <ContactModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>

      <Box
        mt={{ base: 5, md: 15 }}
        px={5}
        pt={{ base: 5, md: 10 }}
        pb={{ base: 6, md: 10 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign="center"
          mb={{ base: 6, md: 10 }}
        >
          Our Company Attributes
        </Heading>
        <Flex
          justify="center"
          align="center"
          flexWrap="wrap"
          mx={{ base: -2, md: 0 }}
        >
          <Box
            bg="teal.500"
            color="white"
            rounded="md"
            p={4}
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
            textAlign="center"
            w={{ base: "100%", md: "30%" }}
          >
            <Heading as="h3" fontSize="lg" mb={2}>
              Trustworthy
            </Heading>
            <Text fontSize="md">Reliability and honesty.</Text>
          </Box>
          <Box
            bg="teal.500"
            color="white"
            rounded="md"
            p={4}
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
            textAlign="center"
            w={{ base: "100%", md: "30%" }}
          >
            <Heading as="h3" fontSize="lg" mb={2}>
              Innovative
            </Heading>
            <Text fontSize="md">
              Creative solutions and improving constantly.
            </Text>
          </Box>
          <Box
            bg="teal.500"
            color="white"
            rounded="md"
            p={4}
            textAlign="center"
            w={{ base: "100%", md: "30%" }}
          >
            <Heading as="h3" fontSize="lg" mb={2}>
              Customer-Centric
            </Heading>
            <Text fontSize="md">
              Customer Satisfaction is our top priority.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Text variant="body" textAlign="center" fontWeight="bolder" mb="2vh">
        Durga Utility Services 2018 ©
      </Text>
    </Flex>
  );
};

export default Home;
