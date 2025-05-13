import { Box, Button, Container, Heading, Text, SimpleGrid, Image, Stack, Icon, Flex } from '@chakra-ui/react';
import { FaBook, FaHandsHelping, FaMicrophone } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }: { icon: any; title: string; description: string }) => (
  <Box p={6} bg="white" rounded="lg" shadow="md" textAlign="center" transition="transform 0.3s" _hover={{ transform: 'translateY(-5px)' }}>
    <Icon as={icon} w={10} h={10} color="brand.purple" mb={4} />
    <Heading size="md" mb={2}>{title}</Heading>
    <Text color="gray.600">{description}</Text>
  </Box>
);

export const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.lavender" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center">
            <Box flex={1}>
              <Heading
                as="h1"
                size="2xl"
                mb={4}
                bgGradient="linear(to-r, brand.purple, brand.teal)"
                bgClip="text"
              >
                Unpacking queer policy. Empowering the next generation.
              </Heading>
              <Text fontSize="xl" color="gray.600" mb={6}>
                Clear the Closet is your trusted resource for understanding LGBTQ+ legislation
                and taking meaningful action for equality.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button
                  as={RouterLink}
                  to="/legislation"
                  size="lg"
                  colorScheme="teal"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                >
                  Explore Legislation
                </Button>
                <Button
                  as={RouterLink}
                  to="/action"
                  size="lg"
                  variant="outline"
                  colorScheme="purple"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                >
                  Take Action
                </Button>
              </Stack>
            </Box>
            <Flex flex={1} justify="center">
              <Image
                src="hero-illustration.svg"
                alt="Diverse group of people standing together"
                maxH="400px"
                borderRadius="lg"
                shadow="md"
              />
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={16}>
        <Heading textAlign="center" mb={12} size="xl">
          How We Make a Difference
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <FeatureCard
            icon={FaBook}
            title="Learn"
            description="Understand current legislation and policies affecting the LGBTQ+ community."
          />
          <FeatureCard
            icon={FaMicrophone}
            title="Share"
            description="Amplify queer voices and stories of triumph in our community."
          />
          <FeatureCard
            icon={FaHandsHelping}
            title="Act"
            description="Get involved with actionable steps to support LGBTQ+ rights."
          />
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box bg="brand.pink" py={16}>
        <Container maxW="container.xl" textAlign="center">
          <Heading mb={4}>Ready to make a difference?</Heading>
          <Text fontSize="xl" mb={8}>
            Join our community of advocates and stay updated on the latest developments.
          </Text>
          <Button
            as={RouterLink}
            to="/action"
            size="lg"
            colorScheme="purple"
            px={8}
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
            transition="all 0.2s"
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
}; 