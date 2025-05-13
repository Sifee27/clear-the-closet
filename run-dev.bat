@echo off
echo Starting Clear the Closet development server...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed or not in your PATH.
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Display Node.js version
echo Node.js version:
call node -v
echo.

REM Run the development server
echo Starting development server...
call npx vite --port 3000
echo.

pause 