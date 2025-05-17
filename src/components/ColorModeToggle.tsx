import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <MotionIconButton
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      color={useColorModeValue('gray.600', 'gray.300')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.700'),
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    />
  );
}; 