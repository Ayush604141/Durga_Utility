import {
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"white"} color={"teal.800"}>
        <ModalHeader>
          <Text fontSize="2xl">Contact</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody m="0 1vh 3vh 1vh">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="4"
          >
            <Skeleton isLoaded={imageLoaded} height="40vh" width="100%">
              <Image
                src="https://res.cloudinary.com/dcj2allfp/image/upload/v1717662479/durga-utility/ceyp5w4cyju1mhav0jex.jpg"
                height="40vh"
                width="100%"
                objectFit="cover"
                objectPosition="center"
                borderRadius="1vh"
                onLoad={handleImageLoad}
              />
            </Skeleton>
            <Heading fontSize="3xl" color="teal.800">
              Hemant D. Golani
            </Heading>
          </Flex>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            mt="4"
            gap="2"
          >
            <Text
              width={250}
              height={"auto"}
              textAlign={"center"}
              fontSize={"l"}
              fontWeight={"bolder"}
            >
              +91 97264 60576
            </Text>
            <Text
              width={250}
              height={"auto"}
              textTransform={"lowercase"}
              textAlign={"center"}
              fontSize={"l"}
              fontWeight={"bolder"}
            >
              durgautility.service@gmail.com
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactModal;
