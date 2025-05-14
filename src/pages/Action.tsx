import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Stack,
  useClipboard,
  Textarea,
  useToast,
  Icon,
  List,
  ListItem,
  ListIcon,
  Link,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaCheckCircle, FaExternalLinkAlt, FaCopy, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

// Email template placeholder - Replace with your own template
const emailTemplate = `Dear [Representative's Name],

I am writing to express my concern about [Bill Number/Name] and its potential impact on the LGBTQ+ community. As your constituent, I urge you to [support/oppose] this legislation because...

[Personal story or connection to the issue]

Thank you for your time and consideration.

Sincerely,
[Your Name]
[Your Address]`;

// Campaign examples - Replace with current actionable campaigns
const currentCampaigns = [
  {
    id: 1,
    title: "[Campaign 1 Title]",
    description: "[Brief description of the campaign, its goal, and why it matters]",
    action: "[Call to Action Button]",
    link: "#", // Replace with actual campaign URL
  },
  {
    id: 2,
    title: "[Campaign 2 Title]",
    description: "[Brief description of the campaign, its goal, and why it matters]",
    action: "[Call to Action Button]",
    link: "#", // Replace with actual campaign URL
  },
  {
    id: 3,
    title: "[Campaign 3 Title]",
    description: "[Brief description of the campaign, its goal, and why it matters]",
    action: "[Call to Action Button]",
    link: "#", // Replace with actual campaign URL
  },
];

const ActionCard = ({ campaign }: { campaign: typeof currentCampaigns[0] }) => (
  <Box
    bg="white"
    p={6}
    rounded="lg"
    shadow="md"
    borderWidth="1px"
    borderColor="gray.200"
  >
    <Stack spacing={4}>
      <Heading size="md">{campaign.title}</Heading>
      <Text color="gray.600">{campaign.description}</Text>
      <Button
        as={Link}
        href={campaign.link}
        target="_blank"
        rel="noopener noreferrer"
        rightIcon={<FaExternalLinkAlt />}
        colorScheme="purple"
        isExternal
      >
        {campaign.action}
      </Button>
    </Stack>
  </Box>
);

export const Action = () => {
  const [email, setEmail] = useState(emailTemplate);
  const { hasCopied, onCopy } = useClipboard(email);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Template copied!",
      description: "The email template has been copied to your clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    toast({
      title: "Subscription successful!",
      description: "You've been subscribed to our action alerts.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Alert status="info" mb={8}>
          <AlertIcon />
          <Text>Replace all placeholder content on this page with actual campaigns, resources, and advocacy tools relevant to your mission.</Text>
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
              [Action Page Title]
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              [Brief description of why taking action is important and what users can do on this page - 1-2 sentences]
            </Text>
          </Box>

          {/* Current Campaigns */}
          <Box>
            <Heading size="lg" mb={6}>
              [Campaigns Section Title]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {currentCampaigns.map(campaign => (
                <ActionCard key={campaign.id} campaign={campaign} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Email Template */}
          <Box bg="brand.lavender" p={8} rounded="lg">
            <Stack spacing={6}>
              <Heading size="lg">[Email Template Section Title]</Heading>
              <Text>
                [Instructions for using the email template - explain what it's for and how to customize it]
              </Text>
              <Textarea
                value={email}
                onChange={handleEmailChange}
                height="200px"
                bg="white"
              />
              <Button
                leftIcon={<Icon as={hasCopied ? FaCheckCircle : FaCopy} />}
                onClick={handleCopy}
                colorScheme="teal"
                width={{ base: "full", md: "auto" }}
              >
                {hasCopied ? "Copied!" : "Copy Template"}
              </Button>
            </Stack>
          </Box>

          {/* How to Be Effective */}
          <Box>
            <Heading size="lg" mb={6}>
              [Advocacy Tips Section Title]
            </Heading>
            <List spacing={4}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.teal" />
                <Text display="inline" fontWeight="bold">[Tip 1 Title]:</Text>
                {" [Brief description of the first advocacy tip]"}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.teal" />
                <Text display="inline" fontWeight="bold">[Tip 2 Title]:</Text>
                {" [Brief description of the second advocacy tip]"}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.teal" />
                <Text display="inline" fontWeight="bold">[Tip 3 Title]:</Text>
                {" [Brief description of the third advocacy tip]"}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.teal" />
                <Text display="inline" fontWeight="bold">[Tip 4 Title]:</Text>
                {" [Brief description of the fourth advocacy tip]"}
              </ListItem>
            </List>
          </Box>

          {/* Newsletter Signup */}
          <Box textAlign="center" bg="brand.pink" p={8} rounded="lg">
            <Stack spacing={4}>
              <Heading size="lg">[Newsletter Section Title]</Heading>
              <Text fontSize="lg">
                [Brief description of what subscribers will receive and how often]
              </Text>
              <Button
                leftIcon={<FaEnvelope />}
                colorScheme="purple"
                size="lg"
                width={{ base: "full", md: "auto" }}
                alignSelf="center"
                onClick={handleSubscribe}
              >
                [Subscribe Button Text]
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 