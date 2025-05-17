import { Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const SkipToContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      zIndex="modal"
      textAlign="center"
      p={2}
      bg="brand.purple"
      transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.2s ease-in-out"
    >
      <Button
        onClick={handleClick}
        colorScheme="whiteAlpha"
        size="sm"
        _focus={{
          outline: '2px solid white',
          outlineOffset: '2px',
        }}
      >
        Skip to main content
      </Button>
    </Box>
  );
}; 