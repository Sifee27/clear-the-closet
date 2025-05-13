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
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Dummy data - replace with real content later
const dummyPosts = [
  {
    id: 1,
    title: "Understanding the Equality Act",
    summary: "A comprehensive guide to the landmark legislation and its implications for LGBTQ+ rights.",
    category: "Federal Legislation",
    image: "https://via.placeholder.com/300x200",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "State-by-State Trans Healthcare Laws",
    summary: "An overview of current transgender healthcare policies across different states.",
    category: "Healthcare",
    image: "https://via.placeholder.com/300x200",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "Global LGBTQ+ Rights Report",
    summary: "Analysis of international policies and their impact on queer communities worldwide.",
    category: "International",
    image: "https://via.placeholder.com/300x200",
    date: "2024-03-05",
  },
];

const categories = ["All", "Federal Legislation", "Healthcare", "Education", "International"];

export const Legislation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = dummyPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box py={8}>
      <Container maxW="container.xl">
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
              LGBTQ+ Legislation Explainers
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Stay informed about policies affecting the queer community
            </Text>
          </Box>

          {/* Filters */}
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Input
              placeholder="Search articles..."
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