import { Box, Container, SimpleGrid, Input, Button, Text, Stack, Link, IconButton, FormControl } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement email subscription
    alert('Subscription feature will be implemented soon!');
  };

  return (
    <Box bg="gray.50" color="gray.700" as="footer" py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Clear the Closet</Text>
            <Text fontSize="sm">
              Unpacking queer policy. Empowering the next generation.
            </Text>
            <Stack direction="row" spacing={2}>
              <IconButton
                as="a"
                href="https://twitter.com"
                aria-label="Twitter"
                icon={<FaTwitter />}
                colorScheme="twitter"
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                as="a"
                href="https://instagram.com"
                aria-label="Instagram"
                icon={<FaInstagram />}
                colorScheme="pink"
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                as="a"
                href="https://facebook.com"
                aria-label="Facebook"
                icon={<FaFacebook />}
                colorScheme="facebook"
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Quick Links</Text>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/about">About Us</Link>
            <Link as={RouterLink} to="/legislation">Legislation</Link>
            <Link as={RouterLink} to="/civics">Queer Civics 101</Link>
            <Link as={RouterLink} to="/voices">Voices & Victories</Link>
            <Link as={RouterLink} to="/action">Take Action</Link>
          </Stack>

          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Stay Updated</Text>
            <Text fontSize="sm">Subscribe to our newsletter for updates and actions.</Text>
            <form onSubmit={handleSubscribe}>
              <FormControl>
                <Stack spacing={2}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    bg="white"
                    required
                    aria-label="Email subscription"
                  />
                  <Button type="submit" colorScheme="teal" width="full">
                    Subscribe
                  </Button>
                </Stack>
              </FormControl>
            </form>
          </Stack>
        </SimpleGrid>

        <Text pt={8} fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} Clear the Closet. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}; 