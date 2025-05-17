import { Box, Button, Container, Heading, Text, SimpleGrid, Image, Stack, Icon, Flex, Alert, AlertIcon } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaBook, FaHandsHelping, FaMicrophone } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FeatureCard = ({ icon, title, description }: { icon: any; title: string; description: string }) => (
  <Box
    p={6}
    rounded="lg"
    shadow="md"
    textAlign="center"
    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    _hover={{
      transform: 'translateY(-8px)',
      shadow: 'xl',
    }}
    animation={`${fadeInUp} 0.5s ease-out`}
  >
    <Icon
      as={icon}
      w={10}
      h={10}
      color="brand.purple"
      mb={4}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _groupHover={{
        transform: 'scale(1.1)',
        color: 'brand.teal',
      }}
    />
    <Heading
      size="md"
      mb={2}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _groupHover={{
        color: 'brand.purple',
      }}
    >
      {title}
    </Heading>
    <Text
      color="gray.600"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _groupHover={{
        color: 'gray.700',
      }}
    >
      {description}
    </Text>
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
                Queer Stories. Clear Futures


              </Heading>
              <Text fontSize="xl" color="gray.600" mb={6}>
                Clear the Closet is a youth-led nonprofit dedicated to amplifying queer voices through storytelling, education, and community support. We aim to empower LGBTQ+ youth and allies by providing access to inclusive resources, zines, and personal narratives. Visitors can explore, share, and connect through uplifting content that centers identity, expression, and liberation. 
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
                  Explore Queer Legislation


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
                  Make Your Voice Heard
                </Button>
              </Stack>
            </Box>
            <Flex flex={1} justify="center" position="relative">
              <Image
                src="/images/hero-image.jpg"
                alt="Diverse group of LGBTQ+ youth and allies celebrating pride"
                maxH="500px"
                borderRadius="lg"
                shadow="xl"
                objectFit="cover"
                fallbackSrc="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              />
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={16}>
        <Heading textAlign="center" mb={12} size="xl">
          What We Offer
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <FeatureCard
            icon={FaBook}
            title="Educational Resources"
            description="Access our comprehensive library of LGBTQ+ history, rights, and current legislation. Stay informed with up-to-date information about queer rights and advocacy."
          />
          <FeatureCard
            icon={FaMicrophone}
            title="Share Your Story"
            description="Join our community of storytellers. Share your experiences, connect with others, and help create a more inclusive world through personal narratives."
          />
          <FeatureCard
            icon={FaHandsHelping}
            title="Community Support"
            description="Find resources, support groups, and opportunities to get involved in local LGBTQ+ initiatives. Together, we can create lasting change."
          />
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box bg="brand.pink" py={16}>
        <Container maxW="container.xl" textAlign="center">
          <Heading mb={4}>Be the Voice for Change</Heading>
          <Text fontSize="xl" mb={8}>
          Your voice matters — and collective action can shift culture and policy. Join us to uplift queer stories, fight harmful legislation, and build a future where everyone can live freely and authentically.
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
            Get Involved
          </Button>
        </Container>
      </Box>
    </Box>
  );
}; 