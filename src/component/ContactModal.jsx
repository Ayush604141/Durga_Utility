import {
  Avatar,
  Badge,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"#ffffff"} color={"#000"}>
        <ModalHeader>
          <Text fontSize="2xl">Contact</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="4"
          >
            <Avatar
              src="https://res.cloudinary.com/dcj2allfp/image/upload/v1717381791/s03io1l6f499nwv5p9hy.png"
              size="xl"
            />
            <Heading fontSize="xl">Hemant D. Golani</Heading>
          </Flex>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            mt="4"
            gap="2"
          >
            <Badge
              variant="solid"
              bg={"rgba(255, 0, 0, 0.3)"}
              width={250}
              height={"auto"}
              textAlign={"center"}
              fontSize={"l"}
            >
              +91 9558137004
            </Badge>
            <Badge
              variant="solid"
              bg={"rgba(255, 0, 0, 0.3)"}
              width={250}
              height={"auto"}
              textTransform={"lowercase"}
              textAlign={"center"}
              fontSize={"l"}
            >
              durgautility.service@gmail.com
            </Badge>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactModal;
