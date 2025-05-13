import React from 'react';
import { Box, Heading, Text, Container, Button } from '@chakra-ui/react';

function SimpleApp() {
  return (
    <Container maxW="container.md" py={10}>
      <Box textAlign="center" p={5} bg="brand.lavender" borderRadius="md">
        <Heading as="h1" size="xl" mb={4} color="brand.purple">
          Clear the Closet
        </Heading>
        <Text fontSize="lg" mb={6}>
          This is a simple test component to verify React and Chakra UI are working correctly.
        </Text>
        <Button colorScheme="teal" onClick={() => alert('Button clicked!')}>
          Test Button
        </Button>
      </Box>
    </Container>
  );
}

export default SimpleApp; 