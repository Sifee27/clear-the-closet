import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Icon,
  Stack,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { FaDownload, FaFilePdf, FaImage } from 'react-icons/fa';

// Dummy data - replace with real content later
const resources = [
  {
    id: 1,
    title: "Know Your Rights Zine",
    description: "A comprehensive guide to LGBTQ+ legal rights and protections.",
    type: "PDF",
    icon: FaFilePdf,
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Trans Healthcare Guide",
    description: "Understanding healthcare rights and accessing affirming care.",
    type: "PDF",
    icon: FaFilePdf,
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "School Policy Infographic",
    description: "Visual guide to LGBTQ+ inclusive school policies.",
    type: "Image",
    icon: FaImage,
    downloadUrl: "#",
  },
];

const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box
      bg={cardBg}
      p={6}
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Icon
        as={resource.icon}
        w={8}
        h={8}
        color="brand.purple"
        mb={4}
      />
      <Heading size="md" mb={2}>
        {resource.title}
      </Heading>
      <Text color="gray.600" mb={4}>
        {resource.description}
      </Text>
      <Button
        as={Link}
        href={resource.downloadUrl}
        download
        leftIcon={<FaDownload />}
        colorScheme="teal"
        size="sm"
      >
        Download {resource.type}
      </Button>
    </Box>
  );
};

export const Civics = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Stack spacing={12}>
          {/* Header */}
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              bgGradient="linear(to-r, brand.purple, brand.teal)"
              bgClip="text"
            >
              Queer Civics 101
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Essential resources and guides to help you understand and advocate for LGBTQ+ rights
              in your community.
            </Text>
          </Box>

          {/* Featured Resources */}
          <Box>
            <Heading size="lg" mb={6}>
              Featured Resources
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {resources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Interactive Learning Section */}
          <Box bg="brand.lavender" p={8} rounded="lg">
            <Stack spacing={4}>
              <Heading size="lg">Interactive Learning</Heading>
              <Text fontSize="lg">
                Explore our interactive modules to learn about civic engagement and LGBTQ+ advocacy.
              </Text>
              <Button
                colorScheme="purple"
                size="lg"
                width={{ base: "full", md: "auto" }}
              >
                Start Learning
              </Button>
            </Stack>
          </Box>

          {/* Community Guidelines */}
          <Box>
            <Heading size="lg" mb={6}>
              Community Guidelines
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading size="md" mb={4}>
                  How to Use These Resources
                </Heading>
                <Text color="gray.600">
                  Our resources are designed to be accessible and informative. Download, share,
                  and use them to educate others in your community. All materials are free for
                  personal and educational use.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={4}>
                  Contribute
                </Heading>
                <Text color="gray.600">
                  Are you an educator or activist? We welcome contributions to our resource
                  library. Contact us to learn more about submitting your materials for review.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 