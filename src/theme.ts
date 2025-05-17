import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const colors = {
  brand: {
    purple: {
      50: '#f5f3ff',
      100: '#e6e6fa',
      200: '#d8bfd8',
      300: '#c8a2c8',
      400: '#b19cd9',
      500: '#9370DB', // Primary brand color
      600: '#7b68ee',
      700: '#6a5acd',
      800: '#483d8b',
      900: '#2f2f4f',
    },
    teal: {
      50: '#e6fffa',
      100: '#b2f5ea',
      200: '#81e6d9',
      300: '#4fd1c5',
      400: '#38b2ac',
      500: '#319795',
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1d4044',
    },
  },
};

const fonts = {
  heading: 'Montserrat, system-ui, sans-serif',
  body: 'Inter, system-ui, sans-serif',
};

const styles = {
  global: (props: { colorMode: string }) => ({
    body: {
      bg: mode('white', 'gray.900')(props),
      color: mode('gray.800', 'white')(props),
    },
    a: {
      color: mode('brand.purple.500', 'brand.purple.300')(props),
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      _hover: {
        textDecoration: 'underline',
        color: mode('brand.purple.600', 'brand.purple.200')(props),
        transform: 'translateY(-1px)',
      },
      _focus: {
        outline: '2px solid',
        outlineColor: mode('brand.purple.500', 'brand.purple.300')(props),
        outlineOffset: '2px',
      },
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'md',
      _focus: {
        boxShadow: 'outline',
      },
    },
    variants: {
      solid: (props: { colorMode: string }) => ({
        bg: mode('brand.purple.500', 'brand.purple.300')(props),
        color: mode('white', 'gray.800')(props),
        _hover: {
          bg: mode('brand.purple.600', 'brand.purple.400')(props),
        },
      }),
      outline: (props: { colorMode: string }) => ({
        borderColor: mode('brand.purple.500', 'brand.purple.300')(props),
        color: mode('brand.purple.500', 'brand.purple.300')(props),
        _hover: {
          bg: mode('brand.purple.50', 'brand.purple.900')(props),
        },
      }),
    },
  },
  Link: {
    baseStyle: (props: { colorMode: string }) => ({
      color: mode('brand.purple.500', 'brand.purple.300')(props),
      _hover: {
        textDecoration: 'none',
        color: mode('brand.purple.600', 'brand.purple.200')(props),
      },
    }),
  },
  Heading: {
    baseStyle: (props: { colorMode: string }) => ({
      color: mode('gray.800', 'white')(props),
    }),
  },
  Card: {
    baseStyle: (props: { colorMode: string }) => ({
      p: 6,
      bg: mode('white', 'gray.800')(props),
      borderRadius: 'lg',
      boxShadow: mode('md', 'dark-lg')(props),
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      _hover: {
        transform: 'translateY(-4px)',
        boxShadow: mode('lg', 'dark-xl')(props),
      },
    }),
  },
  Container: {
    baseStyle: {
      maxW: 'container.xl',
      px: { base: 4, md: 6, lg: 8 },
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  Text: {
    baseStyle: (props: { colorMode: string }) => ({
      color: mode('gray.600', 'gray.300')(props),
    }),
    variants: {
      gradient: {
        bgGradient: 'linear(to-r, brand.purple.500, brand.teal.500)',
        bgClip: 'text',
        fontWeight: 'bold',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        _hover: {
          opacity: 0.8,
        },
      },
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  components,
  styles,
  fonts,
  shadows: {
    outline: '0 0 0 3px rgba(147, 112, 219, 0.6)',
    'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
    'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.15)',
  },
  transitions: {
    property: {
      common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    },
    easing: {
      'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
      'ultra-fast': '50ms',
      faster: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      slower: '700ms',
      'ultra-slow': '1000ms',
    },
  },
});

export default theme; 