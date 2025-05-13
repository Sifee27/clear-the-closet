# Clear the Closet - Troubleshooting Guide

## Blank Screen Issue

If you're seeing a blank white screen when trying to run the application, here are some steps to troubleshoot:

### 1. Check Node.js Version

This project requires Node.js version 20.x or higher. Your current version is v14.15.3, which is too old.

```bash
# Check your current Node.js version
node -v
```

**Solution:** Download and install the latest LTS version of Node.js from [nodejs.org](https://nodejs.org/).

### 2. Clean Installation

Delete the node_modules folder and package-lock.json, then reinstall dependencies:

```bash
# Remove existing dependencies
rm -rf node_modules
rm package-lock.json

# Reinstall with legacy peer deps flag
npm install --legacy-peer-deps
```

### 3. PowerShell Execution Policy

If you're using PowerShell and encountering execution policy restrictions:

```powershell
# Run PowerShell as Administrator and execute:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 4. Test Static HTML

Open the `static-test.html` file directly in your browser to verify that basic HTML rendering works.

### 5. Check Browser Console

Open your browser's developer tools (F12) and check the console for any error messages that might explain why the application isn't rendering.

### 6. Vite Configuration

The Vite configuration has been updated to use relative paths. Make sure you're using the latest version:

```javascript
// vite.config.ts
export default defineConfig({
  // ...
  base: './'
});
```

### 7. Error Boundaries

We've added error boundaries to catch and display React errors. If there's a rendering issue, you should see an error message instead of a blank screen.

### 8. Try a Different Browser

Sometimes browser extensions or settings can interfere with React applications. Try using a different browser or incognito mode.

## Stuck at "Loading Clear the Closet..." Screen

If your application is showing the loading message but not progressing, this indicates that React is starting to initialize but encountering an error during rendering. Here are steps to fix this:

### 1. Check Node.js Version (CRITICAL)

This project requires Node.js version 20.x or higher. Your current version is v14.15.3, which is too old and incompatible with the dependencies.

```bash
# Check your current Node.js version
node -v
```

**Solution:** Download and install the latest LTS version of Node.js from [nodejs.org](https://nodejs.org/).

### 2. Test Basic React Functionality

Open the `react-test.html` file directly in your browser. This file loads React from CDN without requiring Node.js or any build process. If this works, it confirms that:

1. Your browser can run React correctly
2. The issue is with your Node.js environment or build configuration

### 3. Clean Installation

Delete the node_modules folder and package-lock.json, then reinstall dependencies:

```bash
# Remove existing dependencies
rm -rf node_modules
rm package-lock.json

# Reinstall with legacy peer deps flag
npm install --legacy-peer-deps
```

### 4. Try the Minimal Test Version

We've created a simplified version of the app that doesn't use Chakra UI or other complex dependencies. This version is currently active in the codebase and should work even with older Node.js versions.

### 5. Check Browser Console

Open your browser's developer tools (F12) and check the console for any error messages. Look for:

- Missing module errors
- React rendering errors
- JavaScript syntax errors

### 6. PowerShell Execution Policy

If you're using PowerShell and encountering execution policy restrictions:

```powershell
# Run PowerShell as Administrator and execute:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 7. Run the Debug Script

We've created a debug script to help identify issues:

```bash
node debug-app.js
```

This will check for critical files and dependencies.

### 8. Try a Different Browser

Sometimes browser extensions or settings can interfere with React applications. Try using a different browser or incognito mode.

### 9. Check Vite Configuration

The Vite configuration has been updated to use relative paths. Make sure you're using the latest version:

```javascript
// vite.config.ts
export default defineConfig({
  // ...
  base: './'
});
```

### 10. Error Boundaries

We've added error boundaries to catch and display React errors. If there's a rendering issue, you should see an error message instead of a blank screen.

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)
- [Node.js Download](https://nodejs.org/en/download/)

If you're still experiencing issues after trying these steps, please open an issue on the repository with details about your environment and the exact error messages you're seeing. 