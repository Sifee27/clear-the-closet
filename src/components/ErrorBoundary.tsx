import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={8} textAlign="center">
          <Heading mb={4}>Something went wrong</Heading>
          <Text mb={4}>{this.state.error?.message}</Text>
          <Button onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
} 