import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  AspectRatio,
  Stack,
  Avatar,
  Tag,
  LinkBox,
  LinkOverlay,
  Flex,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Example stories - Replace with actual stories and testimonials
const storyExamples = [
  {
    id: 1,
    title: "[Story Title 1]",
    author: "[Person's Name]",
    authorRole: "[Role/Position]",
    summary: "[Brief summary of their story or contribution to the LGBTQ+ community - 1-2 sentences]",
    image: "https://via.placeholder.com/150?text=Person",
    category: "[Story Category]",
    videoUrl: "#", // Replace with actual video embed URL
  },
  {
    id: 2,
    title: "[Story Title 2]",
    author: "[Person's Name]",
    authorRole: "[Role/Position]",
    summary: "[Brief summary of their story or contribution to the LGBTQ+ community - 1-2 sentences]",
    image: "https://via.placeholder.com/150?text=Person",
    category: "[Story Category]",
    audioUrl: "#", // Replace with actual audio URL
  },
  {
    id: 3,
    title: "[Story Title 3]",
    author: "[Person's Name]",
    authorRole: "[Role/Position]",
    summary: "[Brief summary of their story or contribution to the LGBTQ+ community - 1-2 sentences]",
    image: "https://via.placeholder.com/150?text=Person",
    category: "[Story Category]",
    videoUrl: "#", // Replace with actual video embed URL
  },
];

const StoryCard = ({ story }: { story: typeof storyExamples[0] }) => (
  <LinkBox
    as="article"
    bg="white"
    p={6}
    rounded="lg"
    shadow="md"
    transition="all 0.2s"
    _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
  >
    <Stack spacing={4}>
      {story.videoUrl && story.videoUrl !== "#" && (
        <AspectRatio ratio={16 / 9} mb={4}>
          <iframe
            title={story.title}
            src={story.videoUrl}
            allowFullScreen
            style={{ borderRadius: '0.5rem' }}
          />
        </AspectRatio>
      )}
      
      {story.videoUrl === "#" && (
        <Box bg="gray.100" borderRadius="md" p={4} textAlign="center" mb={4}>
          <Text fontSize="sm" color="gray.500">Video placeholder - add actual video URL</Text>
        </Box>
      )}
      
      <Tag size="sm" colorScheme="purple" alignSelf="flex-start">
        {story.category}
      </Tag>

      <LinkOverlay as={RouterLink} to={`/voices/${story.id}`}>
        <Heading size="lg" mb={2}>
          {story.title}
        </Heading>
      </LinkOverlay>

      <Text color="gray.600" noOfLines={3}>
        {story.summary}
      </Text>

      <Flex align="center" mt={4}>
        <Avatar src={story.image} name={story.author} size="sm" />
        <Box ml={3}>
          <Text fontWeight="bold" fontSize="sm">
            {story.author}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {story.authorRole}
          </Text>
        </Box>
      </Flex>
    </Stack>
  </LinkBox>
);

export const Voices = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Alert status="info" mb={8}>
          <AlertIcon />
          <Text>Replace all placeholder content with actual stories, interviews, and testimonials from LGBTQ+ community members and allies.</Text>
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
              [Stories Page Title]
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              [Brief description of this section's purpose - whose voices are featured and why they matter]
            </Text>
          </Box>

          {/* Featured Story */}
          <Box bg="brand.lavender" p={8} rounded="lg">
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} alignItems="center">
              <Box>
                <Heading size="lg" mb={4}>
                  [Featured Story Title]
                </Heading>
                <Text fontSize="xl" mb={6}>
                  [Brief description of the featured story and why it's highlighted - 1-2 sentences]
                </Text>
                <Box bg="gray.200" borderRadius="md" height="250px" display="flex" alignItems="center" justifyContent="center">
                  <Text>[Featured video or content will appear here]</Text>
                </Box>
              </Box>
              <Box>
                <Text fontSize="lg" color="gray.700">
                  "[Add a powerful quote from the featured person that captures the essence of their story or message]"
                </Text>
                <Flex align="center" mt={6}>
                  <Avatar
                    src="https://via.placeholder.com/150?text=Featured"
                    name="[Featured Person's Name]"
                    size="lg"
                  />
                  <Box ml={4}>
                    <Text fontWeight="bold">[Featured Person's Name]</Text>
                    <Text color="gray.600">[Featured Person's Role]</Text>
                  </Box>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Stories Grid */}
          <Box>
            <Heading size="lg" mb={6}>
              [Stories Section Title]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {storyExamples.map(story => (
                <StoryCard key={story.id} story={story} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Submit Story CTA */}
          <Box textAlign="center" bg="brand.pink" p={8} rounded="lg">
            <Heading size="lg" mb={4}>
              [Call to Action Title]
            </Heading>
            <Text fontSize="lg" mb={4}>
              [Invitation for users to share their own stories - 1-2 sentences explaining what you're looking for]
            </Text>
            <LinkBox
              as={RouterLink}
              to="/submit-story"
              display="inline-block"
              bg="brand.purple"
              color="white"
              px={8}
              py={4}
              rounded="md"
              fontWeight="bold"
              _hover={{ bg: 'brand.teal' }}
            >
              [Submit Button Text]
            </LinkBox>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 