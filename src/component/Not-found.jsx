import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FcHome } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Flex
      height={{ base: "92vh", md: "100vh" }}
      backgroundImage={"url(/BackgroundSVG.svg)"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="teal"
      px={5}
      overflow={"hidden"}
    >
      <Heading as="h1" size="3xl" mb={4} fontWeight="bolder">
        404
      </Heading>
      <Heading as="h1" size="xl" mb={4} fontWeight="bold">
        Page Not Found
      </Heading>
      <Text fontSize="lg" mb={6}>
        Sorry, the page you are looking for could not be found.
      </Text>
      <Button
        colorScheme="teal"
        size="lg"
        onClick={() => {
          navigate("/");
        }}
        rightIcon={<FcHome />}
      >
        Go to Home Page
      </Button>
    </Flex>
  );
};

export default NotFound;
