import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#f5f3ff',
    100: '#e6e6fa',
    200: '#dcd6ff',
    300: '#cabfff',
    400: '#b19dff',
    500: '#9370db',
    600: '#7c5dc9',
    700: '#6a4bb0',
    800: '#5a3d99',
    900: '#4a2e7d',
    lavender: '#E6E6FA',
    teal: '#40B5AD',
    pink: '#FFB6C1',
    purple: '#9370DB',
  },
};

const fonts = {
  heading: 'Montserrat, system-ui, sans-serif',
  body: 'Inter, system-ui, sans-serif',
};

const styles = {
  global: {
    body: {
      bg: 'white',
      color: 'gray.800',
    },
    a: {
      color: 'brand.purple',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'md',
    },
    variants: {
      solid: {
        bg: 'brand.teal',
        color: 'white',
        _hover: {
          bg: 'brand.purple',
          transform: 'translateY(-2px)',
          boxShadow: 'md',
        },
        _active: {
          bg: 'brand.600',
        },
      },
      outline: {
        borderColor: 'brand.purple',
        color: 'brand.purple',
        _hover: {
          bg: 'brand.100',
          transform: 'translateY(-2px)',
          boxShadow: 'md',
        },
      },
    },
    defaultProps: {
      colorScheme: 'brand',
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
    variants: {
      nav: {
        fontWeight: 'medium',
        _hover: {
          color: 'brand.purple',
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: '700',
    },
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
}); 