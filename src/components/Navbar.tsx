import { Box, Flex, HStack, IconButton, useDisclosure, VStack, Text, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      px={3}
      py={2}
      rounded="md"
      fontWeight={isActive ? "bold" : "medium"}
      color={isActive ? "brand.purple" : "gray.700"}
      bg={isActive ? "brand.lavender" : "transparent"}
      _hover={{
        textDecoration: 'none',
        bg: 'brand.lavender',
        color: 'brand.purple',
      }}
      transition="all 0.2s"
    >
      {children}
    </ChakraLink>
  );
};

export const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="nav" bg={bgColor} boxShadow="sm" position="sticky" top={0} zIndex="sticky" borderBottom="1px" borderColor={borderColor}>
      <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto" px={{ base: 4, md: 6 }}>
        <ChakraLink as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            fontWeight="bold" 
            color="brand.purple"
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
          >
            Clear the Closet
          </Text>
        </ChakraLink>

        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <NavLink to="/legislation">Legislation</NavLink>
          <NavLink to="/civics">Queer Civics 101</NavLink>
          <NavLink to="/voices">Voices & Victories</NavLink>
          <NavLink to="/action">Take Action</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </HStack>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
          color="brand.purple"
        />
      </Flex>

      {/* Mobile menu */}
      <VStack
        display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
        bg={bgColor}
        p={4}
        spacing={4}
        borderTop="1px"
        borderColor={borderColor}
        boxShadow="md"
        onClick={onClose}
      >
        <NavLink to="/legislation">Legislation</NavLink>
        <NavLink to="/civics">Queer Civics 101</NavLink>
        <NavLink to="/voices">Voices & Victories</NavLink>
        <NavLink to="/action">Take Action</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </VStack>
    </Box>
  );
}; 