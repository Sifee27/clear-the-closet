import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Tag,
  Stack,
  Input,
  Select,
  Image,
  LinkBox,
  LinkOverlay,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Example legislation articles - Replace with real content
const exampleArticles = [
  {
    id: 1,
    title: "[Legislation Article Title 1]",
    summary: "[Brief summary of the legislation, its impact, and why it matters to the LGBTQ+ community - 1-2 sentences]",
    category: "[Category 1]",
    image: "https://via.placeholder.com/300x200?text=Legislation+Image",
    date: "2024-01-01",
  },
  {
    id: 2,
    title: "[Legislation Article Title 2]",
    summary: "[Brief summary of the legislation, its impact, and why it matters to the LGBTQ+ community - 1-2 sentences]",
    category: "[Category 2]",
    image: "https://via.placeholder.com/300x200?text=Legislation+Image",
    date: "2024-01-02",
  },
  {
    id: 3,
    title: "[Legislation Article Title 3]",
    summary: "[Brief summary of the legislation, its impact, and why it matters to the LGBTQ+ community - 1-2 sentences]",
    category: "[Category 3]",
    image: "https://via.placeholder.com/300x200?text=Legislation+Image",
    date: "2024-01-03",
  },
];

// Customize these categories to match your content structure
const categories = ["All", "[Category 1]", "[Category 2]", "[Category 3]", "[Category 4]"];

export const Legislation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = exampleArticles.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Alert status="info" mb={8}>
          <AlertIcon />
          <Text>Replace the placeholder articles with actual legislation explainers. Create categories that match your content strategy.</Text>
        </Alert>
        
        <Stack spacing={8}>
          {/* Header */}
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              bgGradient="linear(to-r, brand.purple, brand.teal)"
              bgClip="text"
            >
              Legislation
            </Heading>
            <Text fontSize="xl" color="gray.600">
              [Brief description of this section's purpose - what will users learn here?]
            </Text>
          </Box>

          {/* Filters */}
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              flex={1}
            />
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              width={{ base: "full", md: "200px" }}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>
          </Stack>

          {/* Articles Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredPosts.map(post => (
              <LinkBox
                key={post.id}
                as="article"
                bg="white"
                rounded="lg"
                overflow="hidden"
                shadow="md"
                transition="all 0.2s"
                _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  objectFit="cover"
                  height="200px"
                  width="100%"
                />
                <Box p={6}>
                  <Tag
                    size="sm"
                    colorScheme="purple"
                    mb={2}
                  >
                    {post.category}
                  </Tag>
                  <LinkOverlay as={RouterLink} to={`/legislation/${post.id}`}>
                    <Heading size="md" mb={2}>
                      {post.title}
                    </Heading>
                  </LinkOverlay>
                  <Text color="gray.600" noOfLines={3}>
                    {post.summary}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mt={4}>
                    {new Date(post.date).toLocaleDateString()}
                  </Text>
                </Box>
              </LinkBox>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}; 