# PowerShell script to help update Node.js
Write-Host "Clear the Closet - Node.js Update Helper" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Check current Node.js version
try {
    $nodeVersion = node -v
    Write-Host "Current Node.js version: $nodeVersion" -ForegroundColor Yellow
    
    # Extract version number for comparison
    $versionNumber = $nodeVersion -replace 'v', ''
    $major = [int]($versionNumber.Split('.')[0])
    
    if ($major -lt 20) {
        Write-Host "Your Node.js version is too old. Version 20.x or higher is recommended." -ForegroundColor Red
        Write-Host "Please download and install the latest LTS version from: https://nodejs.org/" -ForegroundColor Cyan
    } else {
        Write-Host "Your Node.js version is compatible with this project." -ForegroundColor Green
    }
} catch {
    Write-Host "Node.js is not installed or not in your PATH." -ForegroundColor Red
    Write-Host "Please download and install Node.js from: https://nodejs.org/" -ForegroundColor Cyan
}

Write-Host "`nTroubleshooting Steps:" -ForegroundColor Cyan
Write-Host "1. Install Node.js v20.x or higher" -ForegroundColor White
Write-Host "2. Delete the node_modules folder and package-lock.json file" -ForegroundColor White
Write-Host "3. Run: npm install --legacy-peer-deps" -ForegroundColor White
Write-Host "4. Run: npm run dev" -ForegroundColor White

Write-Host "`nWould you like to clean the project and reinstall dependencies? (y/n)" -ForegroundColor Yellow
$response = Read-Host

if ($response -eq 'y') {
    Write-Host "`nCleaning project..." -ForegroundColor Cyan
    
    # Remove node_modules and package-lock.json
    if (Test-Path "node_modules") {
        Write-Host "Removing node_modules folder..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force "node_modules"
    }
    
    if (Test-Path "package-lock.json") {
        Write-Host "Removing package-lock.json..." -ForegroundColor Yellow
        Remove-Item -Force "package-lock.json"
    }
    
    # Install dependencies
    Write-Host "`nInstalling dependencies with --legacy-peer-deps..." -ForegroundColor Cyan
    npm install --legacy-peer-deps
    
    Write-Host "`nSetup complete! Try running 'npm run dev' to start the development server." -ForegroundColor Green
} else {
    Write-Host "`nNo changes made. You can run this script again if you change your mind." -ForegroundColor Yellow
}

Write-Host "`nPress any key to exit..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")