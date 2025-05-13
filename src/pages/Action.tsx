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
} from '@chakra-ui/react';
import { FaCheckCircle, FaExternalLinkAlt, FaCopy, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

// Dummy data - replace with real content later
const emailTemplate = `Dear [Representative's Name],

I am writing to express my concern about [Bill Number/Name] and its potential impact on the LGBTQ+ community. As your constituent, I urge you to [support/oppose] this legislation because...

[Personal story or connection to the issue]

Thank you for your time and consideration.

Sincerely,
[Your Name]
[Your Address]`;

const currentCampaigns = [
  {
    id: 1,
    title: "Support the Equality Act",
    description: "Call your representatives to support comprehensive LGBTQ+ protections.",
    action: "Call Congress",
    link: "https://www.congress.gov/bill/117th-congress/house-bill/5",
  },
  {
    id: 2,
    title: "Protect Trans Youth",
    description: "Sign the petition to oppose discriminatory school policies.",
    action: "Sign Petition",
    link: "https://www.aclu.org/issues/lgbtq-rights/transgender-rights",
  },
  {
    id: 3,
    title: "Healthcare Access Campaign",
    description: "Join the campaign for inclusive healthcare policies.",
    action: "Join Campaign",
    link: "https://www.hrc.org/resources/healthcare",
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
              Take Action Now
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Your voice matters. Join us in advocating for LGBTQ+ rights and creating positive change.
            </Text>
          </Box>

          {/* Current Campaigns */}
          <Box>
            <Heading size="lg" mb={6}>
              Current Campaigns
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
              <Heading size="lg">Email Template</Heading>
              <Text>
                Use this template to contact your representatives about LGBTQ+ issues.
                Customize it with your personal story and details.
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
              How to Be an Effective Advocate
            </Heading>
            <List spacing={4}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.teal" />
                <Text display="inline" fontWeight="bold">Be Personal:</Text>
                {" Share your story and connection to the issue."}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.teal" />
                <Text display="inline" fontWeight="bold">Be Specific:</Text>
                {" Reference bill numbers and specific policies."}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.teal" />
                <Text display="inline" fontWeight="bold">Be Professional:</Text>
                {" Keep communication respectful and focused."}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="brand.teal" />
                <Text display="inline" fontWeight="bold">Follow Up:</Text>
                {" Track responses and maintain communication."}
              </ListItem>
            </List>
          </Box>

          {/* Newsletter Signup */}
          <Box textAlign="center" bg="brand.pink" p={8} rounded="lg">
            <Stack spacing={4}>
              <Heading size="lg">Stay Updated</Heading>
              <Text fontSize="lg">
                Get weekly action alerts and updates on LGBTQ+ legislation.
              </Text>
              <Button
                leftIcon={<FaEnvelope />}
                colorScheme="purple"
                size="lg"
                width={{ base: "full", md: "auto" }}
                alignSelf="center"
                onClick={handleSubscribe}
              >
                Subscribe to Action Alerts
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 