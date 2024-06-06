import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ProductCard = ({ imageUrl, name }) => {
  return (
    <Box width="100%" borderRadius="lg" borderWidth="2px" boxShadow="lg">
      <Image
        src={imageUrl}
        alt="Product Image"
        height={300}
        width={300}
        objectFit="contain"
        objectPosition="center"
        overflow="hidden"
      />
      <Flex
        fontFamily="monofett"
        p={2}
        textAlign="center"
        bgColor="teal.100"
        alignItems="center"
      >
        <Heading as="h3" size="md" mb={2}>
          {name}
        </Heading>
      </Flex>
    </Box>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
