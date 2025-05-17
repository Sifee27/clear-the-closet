import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, Component, ReactNode, useEffect } from 'react';
import { Box, Spinner, Center, Text, useColorModeValue } from '@chakra-ui/react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SkipToContent } from './components/SkipToContent';
import theme from './theme';
import { motion } from 'framer-motion';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Legislation = lazy(() => import('./pages/Legislation').then(module => ({ default: module.Legislation })));
const Civics = lazy(() => import('./pages/Civics').then(module => ({ default: module.Civics })));
const Voices = lazy(() => import('./pages/Voices').then(module => ({ default: module.Voices })));
const Action = lazy(() => import('./pages/Action').then(module => ({ default: module.Action })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));

// Loading component
const LoadingSpinner = () => {
  const spinnerColor = useColorModeValue('brand.purple.500', 'brand.purple.300');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color={spinnerColor}
          size="xl"
        />
        <Text mt={4} color={textColor}>Loading...</Text>
      </Box>
    </Center>
  );
};

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Error boundary component
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Center h="100vh">
          <Box textAlign="center" p={8} maxW="container.md">
            <Text fontSize="2xl" color="red.500" mb={4}>
              Oops! Something went wrong.
            </Text>
            <Text color="gray.600" mb={4}>
              {this.state.error?.message || 'An unexpected error occurred.'}
            </Text>
            <Text color="gray.600">
              Please try refreshing the page or contact support if the problem persists.
            </Text>
          </Box>
        </Center>
      );
    }

    return this.props.children;
  }
}

// Routes wrapper component that uses useLocation
const RoutesWrapper = () => {
  const location = useLocation();

  // Focus management for route changes
  useEffect(() => {
    const handleRouteChange = () => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <Box
      as="main"
      id="main-content"
      tabIndex={-1}
      role="main"
      aria-label="Main content"
      minH="calc(100vh - 4rem - 4rem)" // Subtract navbar and footer height
    >
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/legislation" element={<Legislation />} />
            <Route path="/civics" element={<Civics />} />
            <Route path="/voices" element={<Voices />} />
            <Route path="/action" element={<Action />} />
          </Routes>
        </motion.div>
      </Suspense>
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <ErrorBoundary>
          <SkipToContent />
          <Navbar />
          <RoutesWrapper />
          <ScrollToTop />
          <Footer />
        </ErrorBoundary>
      </Router>
    </ChakraProvider>
  );
}

export default App; 