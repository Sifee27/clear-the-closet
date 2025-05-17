import { IconButton } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
`;

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      aria-label="Scroll to top"
      icon={<FaArrowUp />}
      position="fixed"
      bottom="20px"
      right="20px"
      size="lg"
      colorScheme="purple"
      borderRadius="full"
      opacity={isVisible ? 1 : 0}
      visibility={isVisible ? 'visible' : 'hidden'}
      animation={`${isVisible ? fadeIn : fadeOut} 0.3s ease-in-out`}
      onClick={scrollToTop}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
      }}
      _active={{
        transform: 'translateY(-2px)',
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    />
  );
}; 