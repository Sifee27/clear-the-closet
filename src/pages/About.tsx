import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  Divider,
  Avatar,
  Flex,
  VStack,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const TeamMember = ({ name, role, bio, image }: TeamMemberProps) => {
  return (
    <Box
      bg="white"
      rounded="lg"
      shadow="md"
      overflow="hidden"
      transition="transform 0.3s"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      <Flex direction="column" alignItems="center" p={6}>
        <Avatar
          size="xl"
          src={image}
          mb={4}
          border="4px solid"
          borderColor="brand.lavender"
        />
        <Heading as="h3" size="md" mb={1}>
          {name}
        </Heading>
        <Text color="brand.purple" fontWeight="medium" mb={3}>
          {role}
        </Text>
        <Text textAlign="center" color="gray.600">
          {bio}
        </Text>
      </Flex>
    </Box>
  );
};

// Team members data - REPLACE WITH ACTUAL TEAM MEMBER INFORMATION
const teamMembers: TeamMemberProps[] = [
  {
    name: '[Team Member Name]',
    role: '[Role/Position]',
    bio: '[Brief 2-3 sentence bio describing background, expertise, and passion for LGBTQ+ advocacy]',
    image: 'https://via.placeholder.com/500x500?text=Team+Member+Photo',
  },
  {
    name: '[Team Member Name]',
    role: '[Role/Position]',
    bio: '[Brief 2-3 sentence bio describing background, expertise, and passion for LGBTQ+ advocacy]',
    image: 'https://via.placeholder.com/500x500?text=Team+Member+Photo',
  },
  {
    name: '[Team Member Name]',
    role: '[Role/Position]',
    bio: '[Brief 2-3 sentence bio describing background, expertise, and passion for LGBTQ+ advocacy]',
    image: 'https://via.placeholder.com/500x500?text=Team+Member+Photo',
  },
  {
    name: '[Team Member Name]',
    role: '[Role/Position]',
    bio: '[Brief 2-3 sentence bio describing background, expertise, and passion for LGBTQ+ advocacy]',
    image: 'https://via.placeholder.com/500x500?text=Team+Member+Photo',
  },
];

export const About = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.lavender" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            textAlign="center"
            bgGradient="linear(to-r, brand.purple, brand.teal)"
            bgClip="text"
          >
            About Clear the Closet
          </Heading>
          <Text fontSize="xl" textAlign="center" maxW="3xl" mx="auto" color="gray.600">
            [Add your organization's mission statement here - 1-2 sentences describing your purpose and goals]
          </Text>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Our Story
            </Heading>
            <Text fontSize="lg" mb={4}>
              [Add founding story paragraph - When was your organization founded? By whom? What need or gap were you addressing?]
            </Text>
            <Text fontSize="lg" mb={4}>
              [Add problem statement paragraph - What specific challenges in LGBTQ+ policy information or advocacy does your organization address?]
            </Text>
            <Text fontSize="lg">
              [Add solution paragraph - How does your platform/organization help solve these problems? What unique approach do you take?]
            </Text>
          </Box>
          <Box position="relative">
            <Alert status="info" mb={4}>
              <AlertIcon />
              Replace with an image that represents your organization's work
            </Alert>
            <Image
              src="https://via.placeholder.com/800x600?text=Organization+Image"
              alt="Image representing organization's mission"
              rounded="lg"
              shadow="md"
            />
          </Box>
        </SimpleGrid>
      </Container>

      {/* Our Values Section */}
      <Box bg={bgColor} py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" mb={12}>
            <Heading as="h2" size="xl" textAlign="center">
              Our Values
            </Heading>
            <Text fontSize="lg" textAlign="center" maxW="3xl">
              [Add a brief introduction to your organization's values and why they matter]
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            <Box bg="white" p={8} rounded="lg" shadow="md" textAlign="center">
              <Heading as="h3" size="md" color="brand.purple" mb={4}>
                [Value 1]
              </Heading>
              <Text>[Description of Value 1 and how it guides your work - 1-2 sentences]</Text>
            </Box>
            <Box bg="white" p={8} rounded="lg" shadow="md" textAlign="center">
              <Heading as="h3" size="md" color="brand.teal" mb={4}>
                [Value 2]
              </Heading>
              <Text>[Description of Value 2 and how it guides your work - 1-2 sentences]</Text>
            </Box>
            <Box bg="white" p={8} rounded="lg" shadow="md" textAlign="center">
              <Heading as="h3" size="md" color="brand.pink" mb={4}>
                [Value 3]
              </Heading>
              <Text>[Description of Value 3 and how it guides your work - 1-2 sentences]</Text>
            </Box>
            <Box bg="white" p={8} rounded="lg" shadow="md" textAlign="center">
              <Heading as="h3" size="md" color="brand.purple" mb={4}>
                [Value 4]
              </Heading>
              <Text>[Description of Value 4 and how it guides your work - 1-2 sentences]</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} align="center" mb={12}>
          <Heading as="h2" size="xl" textAlign="center">
            Meet Our Team
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="3xl">
            [Add a brief introduction to your team and their collective expertise]
          </Text>
        </VStack>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </SimpleGrid>
      </Container>

      {/* Contact Section */}
      <Box bg="brand.pink" py={16} position="relative">
        <Container maxW="container.xl" zIndex={1} position="relative">
          <Stack spacing={4} textAlign="center" maxW="2xl" mx="auto">
            <Heading as="h2" size="xl">
              Get In Touch
            </Heading>
            <Text fontSize="lg">
              [Add brief invitation for contact or collaboration - 1-2 sentences]
            </Text>
            <Text fontWeight="bold" fontSize="lg">
              Email: [your-organization-email@example.com]
            </Text>
            <Text fontSize="md">
              [Organization location or headquarters]
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}; 