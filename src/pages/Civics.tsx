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
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaDownload, FaFilePdf, FaImage } from 'react-icons/fa';

// Example resources - Replace with actual educational materials
const resourceExamples = [
  {
    id: 1,
    title: "[Resource Title 1]",
    description: "[Brief description of this educational resource and its purpose - 1-2 sentences]",
    type: "[File Type]",
    icon: FaFilePdf,
    downloadUrl: "#", // Replace with actual download link
  },
  {
    id: 2,
    title: "[Resource Title 2]",
    description: "[Brief description of this educational resource and its purpose - 1-2 sentences]",
    type: "[File Type]",
    icon: FaFilePdf,
    downloadUrl: "#", // Replace with actual download link
  },
  {
    id: 3,
    title: "[Resource Title 3]",
    description: "[Brief description of this educational resource and its purpose - 1-2 sentences]",
    type: "[File Type]",
    icon: FaImage,
    downloadUrl: "#", // Replace with actual download link
  },
];

const ResourceCard = ({ resource }: { resource: typeof resourceExamples[0] }) => {
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
        <Alert status="info" mb={8}>
          <AlertIcon />
          <Text>Replace all placeholder content with actual educational resources about LGBTQ+ civics, rights, and advocacy.</Text>
        </Alert>
        
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
              Educate Yourself
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              [Brief description of this page's purpose - what educational resources are provided and who they're for]
            </Text>
          </Box>

          {/* Featured Resources */}
          <Box>
            <Heading size="lg" mb={6}>
              [Resources Section Title]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {resourceExamples.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Interactive Learning Section */}
          <Box bg="brand.lavender" p={8} rounded="lg">
            <Stack spacing={4}>
              <Heading size="lg">[Interactive Section Title]</Heading>
              <Text fontSize="lg">
                [Description of what interactive learning resources are available and what users will gain from them]
              </Text>
              <Button
                colorScheme="purple"
                size="lg"
                width={{ base: "full", md: "auto" }}
              >
                [Interactive Button Text]
              </Button>
            </Stack>
          </Box>

          {/* Community Guidelines */}
          <Box>
            <Heading size="lg" mb={6}>
              [Guidelines Section Title]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading size="md" mb={4}>
                  [Usage Guidelines Title]
                </Heading>
                <Text color="gray.600">
                  [Explanation of how these resources should be used, any usage restrictions, and attribution requirements if applicable]
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={4}>
                  [Contribution Guidelines Title]
                </Heading>
                <Text color="gray.600">
                  [Information about how others can contribute to these resources, submission process, and content standards]
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 