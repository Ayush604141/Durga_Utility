import { Flex, Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import products from "../../data.json";

const ProductList = () => {
  return (
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
  );
};

export default ProductList;
