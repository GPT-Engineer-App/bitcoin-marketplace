import React, { useState } from "react";
import { Container, VStack, HStack, Text, Box, Button, Image, Input, IconButton, useToast } from "@chakra-ui/react";
import { FaBitcoin, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 0.01,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTU3Mzg5Mzh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    price: 0.02,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTU3Mzg5NDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    price: 0.03,
    image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTU3Mzg5NDR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: `${product.name} added to cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCheckout = () => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    toast({
      title: `Checkout successful! Total: ${total} BTC`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    setCart([]);
  };

  return (
    <Container centerContent maxW="container.lg" py={8}>
      <VStack spacing={8} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Online Marketplace
        </Text>
        <HStack spacing={4} width="100%" justifyContent="space-between">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="30%">
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mb={4} />
              <Text fontSize="xl" fontWeight="bold">
                {product.name}
              </Text>
              <Text fontSize="md" color="gray.500">
                {product.price} BTC
              </Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" mt={4} onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </HStack>
        <Box width="100%" borderWidth="1px" borderRadius="lg" p={4}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Shopping Cart
          </Text>
          {cart.length === 0 ? (
            <Text>Your cart is empty.</Text>
          ) : (
            <VStack spacing={4} align="stretch">
              {cart.map((product, index) => (
                <HStack key={index} justifyContent="space-between">
                  <Text>{product.name}</Text>
                  <Text>{product.price} BTC</Text>
                </HStack>
              ))}
              <Button leftIcon={<FaBitcoin />} colorScheme="orange" variant="solid" onClick={handleCheckout}>
                Checkout
              </Button>
            </VStack>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
