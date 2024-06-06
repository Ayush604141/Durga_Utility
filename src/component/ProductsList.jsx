import { Box, Flex, Grid, Heading, Text, Button } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import products from "../../data.json";
import { useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";

const ProductList = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        height={{ base: "50vh", md: "60vh" }}
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
      >
        <Heading as="h1" size="2xl" mb={4} fontWeight="bold">
          Welcome to Our Product Store
        </Heading>
        <Text fontSize="lg" mb={6}>
          Discover our wide range of high-quality products
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => {
            navigate("/");
          }}
          rightIcon={<FcHome />}
        >
          Home Page
        </Button>
      </Flex>

      <Flex py={20} justifyContent="space-evenly" alignItems="center">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={10}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index + 1}
              imageUrl={product.img}
              name={product.name}
              description={product.description}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default ProductList;
