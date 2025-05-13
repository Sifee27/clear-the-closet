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
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Dummy data - replace with real content later
const stories = [
  {
    id: 1,
    title: "Finding My Voice in Advocacy",
    author: "Alex Chen",
    authorRole: "Student Activist",
    summary: "How I turned my personal journey into a movement for change in my community.",
    image: "https://via.placeholder.com/150",
    category: "Personal Story",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Breaking Barriers in Politics",
    author: "Sarah Martinez",
    authorRole: "State Representative",
    summary: "My path to becoming one of the first openly trans legislators in my state.",
    image: "https://via.placeholder.com/150",
    category: "Interview",
    audioUrl: "https://example.com/audio.mp3",
  },
  {
    id: 3,
    title: "Creating Safe Spaces in Education",
    author: "Dr. James Wilson",
    authorRole: "Education Advocate",
    summary: "Working with schools to develop inclusive policies and support systems.",
    image: "https://via.placeholder.com/150",
    category: "Interview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const StoryCard = ({ story }: { story: typeof stories[0] }) => (
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
      {story.videoUrl && (
        <AspectRatio ratio={16 / 9} mb={4}>
          <iframe
            title={story.title}
            src={story.videoUrl}
            allowFullScreen
            style={{ borderRadius: '0.5rem' }}
          />
        </AspectRatio>
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
              Voices & Victories
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Amplifying the stories of LGBTQ+ activists, lawmakers, and community leaders
              making a difference.
            </Text>
          </Box>

          {/* Featured Story */}
          <Box bg="brand.lavender" p={8} rounded="lg">
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} alignItems="center">
              <Box>
                <Heading size="lg" mb={4}>
                  Featured Story
                </Heading>
                <Text fontSize="xl" mb={6}>
                  "Breaking Barriers in Politics" - An intimate conversation with Sarah Martinez
                  about her groundbreaking journey in state politics.
                </Text>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    title="Featured Story"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    allowFullScreen
                    style={{ borderRadius: '0.5rem' }}
                  />
                </AspectRatio>
              </Box>
              <Box>
                <Text fontSize="lg" color="gray.700">
                  "I never saw someone like me in politics growing up. Now, I get to be that
                  representation for the next generation. It's not just about being in office —
                  it's about showing young queer people that they belong in every space."
                </Text>
                <Flex align="center" mt={6}>
                  <Avatar
                    src="https://via.placeholder.com/150"
                    name="Sarah Martinez"
                    size="lg"
                  />
                  <Box ml={4}>
                    <Text fontWeight="bold">Sarah Martinez</Text>
                    <Text color="gray.600">State Representative</Text>
                  </Box>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Stories Grid */}
          <Box>
            <Heading size="lg" mb={6}>
              Recent Stories
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {stories.map(story => (
                <StoryCard key={story.id} story={story} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Submit Story CTA */}
          <Box textAlign="center" bg="brand.pink" p={8} rounded="lg">
            <Heading size="lg" mb={4}>
              Share Your Story
            </Heading>
            <Text fontSize="lg" mb={4}>
              Are you making waves in your community? We want to hear from you!
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
              Submit Your Story
            </LinkBox>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 