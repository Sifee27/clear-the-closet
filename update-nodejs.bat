@echo off
echo Clear the Closet - Node.js Update Helper
echo ==========================================
echo.

REM Check current Node.js version
node -v > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo Node.js is not installed or not in your PATH.
  echo Please download and install Node.js from: https://nodejs.org/
  goto :instructions
)

FOR /F "tokens=* USEBACKQ" %%F IN (`node -v`) DO (
  SET nodeVersion=%%F
)

echo Current Node.js version: %nodeVersion%
echo.
echo This project requires Node.js version 20.x or higher.
echo Your current version may be too old and incompatible with the dependencies.
echo.

:instructions
echo Please follow these steps:
echo.
echo 1. Download Node.js v20.x LTS from https://nodejs.org/
echo 2. Install Node.js (close any command prompts first)
echo 3. Delete the node_modules folder and package-lock.json
echo 4. Run: npm install --legacy-peer-deps
echo 5. Run: npm run dev
echo.
echo Would you like to open the Node.js download page? (Y/N)
set /p openBrowser=

if /i "%openBrowser%"=="Y" (
  start https://nodejs.org/en/download/
)

echo.
echo Would you like to clean the project now? (Y/N)
set /p cleanProject=

if /i "%cleanProject%"=="Y" (
  echo.
  echo Cleaning project...
  
  if exist node_modules (
    echo Removing node_modules folder...
    rmdir /s /q node_modules
  )
  
  if exist package-lock.json (
    echo Removing package-lock.json...
    del package-lock.json
  )
  
  echo.
  echo Project cleaned successfully!
)

echo.
echo Press any key to exit...
pause > nul 