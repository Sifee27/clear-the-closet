import { Box, Flex, Button, useDisclosure, VStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ColorModeToggle } from './ColorModeToggle';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const bg = useColorModeValue('brand.purple.50', 'brand.purple.900');
  const color = useColorModeValue('brand.purple.500', 'brand.purple.300');

  return (
    <Button
      as={RouterLink}
      to={to}
      variant="ghost"
      color={isActive ? color : 'inherit'}
      bg={isActive ? bg : 'transparent'}
      _hover={{
        bg: isActive ? bg : useColorModeValue('gray.100', 'gray.700'),
        transform: 'translateY(-1px)',
      }}
      _focus={{
        outline: '2px solid',
        outlineColor: color,
        outlineOffset: '2px',
      }}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
      transition="all 0.2s"
    >
      {children}
    </Button>
  );
};

export const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const location = useLocation();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Close mobile menu on route change
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      role="navigation"
      aria-label="Main navigation"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <RouterLink to="/" aria-label="Clear the Closet Home">
          <Box
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue('brand.purple.500', 'brand.purple.300')}
            _hover={{ transform: 'translateY(-1px)' }}
            transition="transform 0.2s"
          >
            Clear the Closet
          </Box>
        </RouterLink>

        {/* Desktop Navigation */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          gap={4}
          role="menubar"
        >
          <NavLink to="/about">About</NavLink>
          <NavLink to="/legislation">Legislation</NavLink>
          <NavLink to="/civics">Civics</NavLink>
          <NavLink to="/voices">Voices</NavLink>
          <NavLink to="/action">Action</NavLink>
          <ColorModeToggle />
        </Flex>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          variant="ghost"
          color={useColorModeValue('gray.600', 'gray.300')}
        />
      </Flex>

      {/* Mobile Navigation Menu */}
      <VStack
        id="mobile-menu"
        display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
        position="fixed"
        top="4rem"
        left={0}
        right={0}
        bottom={0}
        bg={bg}
        p={4}
        spacing={4}
        role="menu"
        aria-label="Mobile navigation menu"
        overflowY="auto"
        zIndex="modal"
      >
        <NavLink to="/about">About</NavLink>
        <NavLink to="/legislation">Legislation</NavLink>
        <NavLink to="/civics">Civics</NavLink>
        <NavLink to="/voices">Voices</NavLink>
        <NavLink to="/action">Action</NavLink>
        <ColorModeToggle />
      </VStack>
    </Box>
  );
}; 