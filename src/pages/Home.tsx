import { Box, Button, Container, Heading, Text, SimpleGrid, Image, Stack, Icon, Flex, Alert, AlertIcon } from '@chakra-ui/react';
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
                [Add Your Tagline Here]
              </Heading>
              <Text fontSize="xl" color="gray.600" mb={6}>
                [Add a brief 2-3 sentence description of your organization's purpose, target audience, and what users can gain from your site]
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
                  [Primary CTA]
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
                  [Secondary CTA]
                </Button>
              </Stack>
            </Box>
            <Flex flex={1} justify="center" position="relative">
              <Alert status="info" position="absolute" top="0" zIndex="1" width="100%">
                <AlertIcon />
                Replace with hero image that represents your mission
              </Alert>
              <Image
                src="https://via.placeholder.com/800x600?text=Hero+Image"
                alt="Hero image representing your mission"
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
          [Add Section Title Here]
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <FeatureCard
            icon={FaBook}
            title="[Feature 1 Title]"
            description="[Brief description of Feature 1 - what users can learn/gain from this aspect of your organization]"
          />
          <FeatureCard
            icon={FaMicrophone}
            title="[Feature 2 Title]"
            description="[Brief description of Feature 2 - what users can learn/gain from this aspect of your organization]"
          />
          <FeatureCard
            icon={FaHandsHelping}
            title="[Feature 3 Title]"
            description="[Brief description of Feature 3 - what users can learn/gain from this aspect of your organization]"
          />
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box bg="brand.pink" py={16}>
        <Container maxW="container.xl" textAlign="center">
          <Heading mb={4}>[Call to Action Heading]</Heading>
          <Text fontSize="xl" mb={8}>
            [1-2 sentence compelling reason to take action, subscribe, or get involved]
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
            [CTA Button Text]
          </Button>
        </Container>
      </Box>
    </Box>
  );
}; 