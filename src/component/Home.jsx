import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { MdExplore } from "react-icons/md";
import ContactModal from "./ContactModal";

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box
      bgImage="url('https://res.cloudinary.com/dcj2allfp/image/upload/v1717319001/t0gusgrz1sfewkajohgx.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="500"
    >
      <Flex align="center" justify="space-between" p={5}>
        <Heading as="h1" color="red" textAlign="center" flex="1">
          Durga Utility Services
        </Heading>
      </Flex>
      <Box textAlign="center" margin="16vh">
        <Heading fontWeight="normal" color="white">
          Leading Supplier of <br />{" "}
          <span className="header">High-Quality</span> Boiler parts and Boiler
          Chemicals
        </Heading>
      </Box>
      <ButtonGroup
        spacing={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button variant="solid" colorScheme="red" rightIcon={<MdExplore />}>
          Explore
        </Button>
        <Button
          variant="outline"
          _hover={{ bgColor: "transparent", color: "rgba(255, 0, 0, 0.5)" }}
          colorScheme="red"
          rightIcon={<FiPhoneCall />}
          onClick={onOpen}
        >
          Contact
        </Button>
      </ButtonGroup>
      <ContactModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Box>
  );
};

export default Home;
