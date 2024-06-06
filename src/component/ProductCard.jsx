import { Box, Image, Heading, Flex, Skeleton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

const ProductCard = ({ imageUrl, name }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box width="100%" borderRadius="lg" borderWidth="2px" boxShadow="lg">
      {isLoading && <Skeleton height={300} width={300} />}
      <Image
        src={imageUrl}
        alt="Product Image"
        height={300}
        width={300}
        objectFit="contain"
        objectPosition="center"
        overflow="hidden"
        onLoad={() => setIsLoading(false)}
        display={isLoading ? "none" : "block"}
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
};

export default ProductCard;
