// Simple script to help debug React application issues

console.log('Starting debug script...');

// Check for Node.js version
try {
  const nodeVersion = process.version;
  console.log('Node.js version:', nodeVersion);
  
  const major = parseInt(nodeVersion.slice(1).split('.')[0], 10);
  if (major < 16) {
    console.error('ERROR: Node.js version is too old. Version 16+ is required for Vite and React 18.');
    console.log('Please update Node.js to version 16 or higher.');
  } else if (major < 20) {
    console.warn('WARNING: Node.js version is older than recommended. Version 20+ is ideal.');
  } else {
    console.log('Node.js version is compatible.');
  }
} catch (error) {
  console.error('Error checking Node.js version:', error);
}

// Check for required files
const fs = require('fs');
const path = require('path');

const criticalFiles = [
  'index.html',
  'src/main.tsx',
  'src/App.tsx',
  'src/index.css',
  'vite.config.ts',
  'package.json'
];

console.log('\nChecking for critical files:');
let missingFiles = false;

criticalFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} is missing`);
    missingFiles = true;
  }
});

if (missingFiles) {
  console.error('\nSome critical files are missing. Please restore them before running the app.');
} else {
  console.log('\nAll critical files are present.');
}

// Check package.json
try {
  const packageJson = require('./package.json');
  console.log('\nPackage name:', packageJson.name);
  console.log('Package version:', packageJson.version);
  
  // Check dependencies
  console.log('\nChecking dependencies:');
  const requiredDeps = ['react', 'react-dom', '@chakra-ui/react', 'react-router-dom'];
  
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep} is missing`);
    }
  });
  
} catch (error) {
  console.error('Error reading package.json:', error);
}

console.log('\nDebug script completed.');
console.log('To fix the "Loading" issue, try:');
console.log('1. Update Node.js to version 20+');
console.log('2. Delete node_modules and package-lock.json');
console.log('3. Run: npm install --legacy-peer-deps');
console.log('4. Run: npm run dev');
console.log('5. Check browser console for errors (F12)'); 