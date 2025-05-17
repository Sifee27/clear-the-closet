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
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');
  const cardHoverShadow = useColorModeValue('lg', 'dark-xl');
  const avatarBorderColor = useColorModeValue('brand.lavender', 'brand.purple.700');
  const headingColor = useColorModeValue('gray.800', 'white');
  const roleColor = useColorModeValue('brand.purple', 'brand.purple.300');
  const bioColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box
      bg={cardBg}
      rounded="lg"
      shadow={cardShadow}
      overflow="hidden"
      transition="transform 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        shadow: cardHoverShadow,
      }}
    >
      <Flex direction="column" alignItems="center" p={6}>
        <Avatar
          size="xl"
          src={image}
          mb={4}
          border="4px solid"
          borderColor={avatarBorderColor}
        />
        <Heading as="h3" size="md" mb={1} color={headingColor}>
          {name}
        </Heading>
        <Text color={roleColor} fontWeight="medium" mb={3}>
          {role}
        </Text>
        <Text textAlign="center" color={bioColor}>
          {bio}
        </Text>
      </Flex>
    </Box>
  );
};

// Team members data - REPLACE WITH ACTUAL TEAM MEMBER INFORMATION
const teamMembers: TeamMemberProps[] = [
  {
    name: 'Jade Vieira',
    role: 'Founder',
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
  const sectionBgColor = useColorModeValue('gray.50', 'gray.900');
  const heroBgColor = useColorModeValue('brand.lavender', 'brand.purple.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const valueCardTextColor = useColorModeValue('gray.700', 'gray.400');
  const contactHeadingColor = useColorModeValue('gray.800', 'white');
  const contactTextColor = useColorModeValue('gray.600', 'gray.300');
  const contactBgColor = useColorModeValue('brand.pink', 'brand.pink.800');

  return (
    <Box>
      {/* Hero Section */}
      <Box bg={heroBgColor} py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            textAlign="center"
            bgGradient="linear(to-r, brand.purple.500, brand.teal.500)"
            bgClip="text"
          >
            About Clear the Closet
          </Heading>
          <Text fontSize="xl" textAlign="center" maxW="3xl" mx="auto" color={textColor}>
            Clear the Closet is a grassroots queer-led organization dedicated to educating, empowering, and advocating for LGBTQ+ indviduals. We aim to close the gap in accesible policy information and highlight underrepresented voices, and inspire action through community storytelling and civic engagement.
          </Text>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
            <Heading as="h2" size="xl" mb={4} color={headingColor}>
              Our Story
            </Heading>
            <Text fontSize="lg" mb={4} color={textColor}>
              Clear the Closet was founded in 2025 by a group of queer students who saw a lack of accesible youth-friendly information about LGBTQ+ rights and legislation. The organization was born out of a need to empower our community with tools to understand and influence the policies that directly impact our lives.
            </Text>
            <Text fontSize="lg" mb={4} color={textColor}>
              Across the U.S., LGBTQ+ individuals, especially youth, struggle to navigate policy changes, identif supportive resources, and make their voices heart. Misinformation, lack of transparency, and legislative complexity create barriers to effective advocacy and civic engagement.
            </Text>
            <Text fontSize="lg" color={textColor}>
              Clear the Closet simplifies access to accurate, up-to-date information on LGBTQ+ legislation while offering curated actions people can take, whether it's contacting representatives, attending ralllies, or supporting local intiatives. Our peer-led approach centers lived experience and mutual aid, building a more informed and mobilized queer community.
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
      <Box bg={sectionBgColor} py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" mb={12}>
            <Heading as="h2" size="xl" textAlign="center" color={headingColor}>
              Our Values
            </Heading>
            <Text fontSize="lg" textAlign="center" maxW="3xl" color={textColor}>
              [Add a brief introduction to your organization's values and why they matter]
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            <Box bg={useColorModeValue('white', 'gray.800')} p={8} rounded="lg" shadow={useColorModeValue('md', 'dark-lg')} textAlign="center">
              <Heading as="h3" size="md" color={useColorModeValue('brand.purple', 'brand.purple.300')} mb={4}>
                Accessibility
              </Heading>
              <Text color={valueCardTextColor}>We prioritize clear, digestible information and resources so that every LGBTQ+ person regardless of age, background, or education, can engage with policy and advocacy efforts.</Text>
            </Box>
            <Box bg={useColorModeValue('white', 'gray.800')} p={8} rounded="lg" shadow={useColorModeValue('md', 'dark-lg')} textAlign="center">
              <Heading as="h3" size="md" color={useColorModeValue('brand.teal', 'brand.teal.300')} mb={4}>
                Community-Centered Action
              </Heading>
              <Text color={valueCardTextColor}>Our work is driven by the needs, voices, and leadership of queer and trans communities, especially youth, ensuring our tools and campaigns reflect real, lived experiences.</Text>
            </Box>
            <Box bg={useColorModeValue('white', 'gray.800')} p={8} rounded="lg" shadow={useColorModeValue('md', 'dark-lg')} textAlign="center">
              <Heading as="h3" size="md" color={useColorModeValue('brand.pink', 'brand.pink.300')} mb={4}>
                Transparency
              </Heading>
              <Text color={valueCardTextColor}>We are commited to being open about our sources, goals, and processes, helping users build trust and confidence in the information and actions we share.</Text>
            </Box>
            <Box bg={useColorModeValue('white', 'gray.800')} p={8} rounded="lg" shadow={useColorModeValue('md', 'dark-lg')} textAlign="center">
              <Heading as="h3" size="md" color={useColorModeValue('brand.purple', 'brand.purple.300')} mb={4}>
                Empowerment through Education
              </Heading>
              <Text color={valueCardTextColor}>We believe knowledge is power, by equippping people with the tools to understand legislation and take action, we foster long-term change and resilience in our communities.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} align="center" mb={12}>
          <Heading as="h2" size="xl" textAlign="center" color={headingColor}>
            Meet Our Team
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="3xl" color={textColor}>
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
      <Box bg={contactBgColor} py={16} position="relative">
        <Container maxW="container.xl" zIndex={1} position="relative">
          <Stack spacing={4} textAlign="center" maxW="2xl" mx="auto">
            <Heading as="h2" size="xl" color={contactHeadingColor}>
              Get In Touch
            </Heading>
            <Text fontSize="lg" color={contactTextColor}>
              [Add brief invitation for contact or collaboration - 1-2 sentences]
            </Text>
            <Text fontWeight="bold" fontSize="lg" color={contactHeadingColor}>
              Email: [your-organization-email@example.com]
            </Text>
            <Text fontSize="md" color={contactTextColor}>
              [Organization location or headquarters]
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}; 