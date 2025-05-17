import { Box, Container, SimpleGrid, Input, Button, Text, Stack, Link, IconButton, FormControl, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement email subscription
    alert('Subscription feature will be implemented soon!');
  };

  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const inputBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box 
      bg={bgColor} 
      color={textColor} 
      as="footer" 
      py={10}
      borderTop="1px"
      borderColor={borderColor}
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color={headingColor}>Clear the Closet</Text>
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
                _hover={{ bg: hoverBg }}
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
                _hover={{ bg: hoverBg }}
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
                _hover={{ bg: hoverBg }}
              />
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color={headingColor}>Quick Links</Text>
            <Link 
              as={RouterLink} 
              to="/"
              _hover={{ 
                color: 'brand.purple.500',
                textDecoration: 'none',
                transform: 'translateY(-1px)'
              }}
              transition="all 0.2s"
            >
              Home
            </Link>
            <Link 
              as={RouterLink} 
              to="/about"
              _hover={{ 
                color: 'brand.purple.500',
                textDecoration: 'none',
                transform: 'translateY(-1px)'
              }}
              transition="all 0.2s"
            >
              About Us
            </Link>
            <Link 
              as={RouterLink} 
              to="/legislation"
              _hover={{ 
                color: 'brand.purple.500',
                textDecoration: 'none',
                transform: 'translateY(-1px)'
              }}
              transition="all 0.2s"
            >
              Legislation
            </Link>
            <Link 
              as={RouterLink} 
              to="/civics"
              _hover={{ 
                color: 'brand.purple.500',
                textDecoration: 'none',
                transform: 'translateY(-1px)'
              }}
              transition="all 0.2s"
            >
              Queer Civics 101
            </Link>
            <Link 
              as={RouterLink} 
              to="/voices"
              _hover={{ 
                color: 'brand.purple.500',
                textDecoration: 'none',
                transform: 'translateY(-1px)'
              }}
              transition="all 0.2s"
            >
              Voices & Victories
            </Link>
            <Link 
              as={RouterLink} 
              to="/action"
              _hover={{ 
                color: 'brand.purple.500',
                textDecoration: 'none',
                transform: 'translateY(-1px)'
              }}
              transition="all 0.2s"
            >
              Take Action
            </Link>
          </Stack>

          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color={headingColor}>Stay Updated</Text>
            <Text fontSize="sm">Subscribe to our newsletter for updates and actions.</Text>
            <form onSubmit={handleSubscribe}>
              <FormControl>
                <Stack spacing={2}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    bg={inputBg}
                    borderColor={borderColor}
                    _hover={{ borderColor: 'brand.purple.500' }}
                    _focus={{ 
                      borderColor: 'brand.purple.500',
                      boxShadow: '0 0 0 1px var(--chakra-colors-brand-purple-500)'
                    }}
                    required
                    aria-label="Email subscription"
                  />
                  <Button 
                    type="submit" 
                    colorScheme="purple" 
                    width="full"
                    _hover={{
                      transform: 'translateY(-1px)',
                      boxShadow: 'lg'
                    }}
                    transition="all 0.2s"
                  >
                    Subscribe
                  </Button>
                </Stack>
              </FormControl>
            </form>
          </Stack>
        </SimpleGrid>

        <Text 
          pt={8} 
          fontSize="sm" 
          textAlign="center"
          borderTop="1px"
          borderColor={borderColor}
          mt={8}
        >
          © {new Date().getFullYear()} Clear the Closet. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}; 