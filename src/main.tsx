import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

// Debug element to show where we are in the rendering process
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = '<div class="loading">Starting React initialization...</div>';
}

// Try to render the app and log any errors
try {
  console.log('Starting React initialization...');
  
  // Create root
  console.log('Creating React root...');
  const root = ReactDOM.createRoot(rootElement!);
  
  // Render the full app
  console.log('Rendering full application...');
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
  console.log('Full application render complete!');
  
} catch (error) {
  console.error('Failed to initialize React:', error);
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1 style="color: red;">React Initialization Error</h1>
        <p>${error instanceof Error ? error.message : String(error)}</p>
      </div>
    `;
  }
} 