# PowerShell script to set execution policy
Write-Host "Clear the Closet - PowerShell Execution Policy Helper" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")

if (-not $isAdmin) {
    Write-Host "This script is not running as Administrator." -ForegroundColor Yellow
    Write-Host "Some execution policy changes may require Administrator privileges." -ForegroundColor Yellow
    Write-Host ""
}

# Get current execution policy
$currentPolicy = Get-ExecutionPolicy
Write-Host "Current execution policy: $currentPolicy" -ForegroundColor Yellow
Write-Host ""

# Explain execution policies
Write-Host "Execution Policy Options:" -ForegroundColor Cyan
Write-Host "- RemoteSigned: Scripts can run, but downloaded scripts must be signed by a trusted publisher." -ForegroundColor White
Write-Host "- Unrestricted: All scripts can run (least secure, but most permissive)." -ForegroundColor White
Write-Host "- Bypass: Nothing is blocked and there are no warnings or prompts." -ForegroundColor White
Write-Host ""

# Ask user which policy to set
Write-Host "Which execution policy would you like to set?" -ForegroundColor Cyan
Write-Host "1. RemoteSigned (Recommended)" -ForegroundColor White
Write-Host "2. Unrestricted" -ForegroundColor White
Write-Host "3. Bypass" -ForegroundColor White
Write-Host "4. Exit without changes" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-4)"

switch ($choice) {
    "1" {
        $policy = "RemoteSigned"
    }
    "2" {
        $policy = "Unrestricted"
    }
    "3" {
        $policy = "Bypass"
    }
    "4" {
        Write-Host "Exiting without changes." -ForegroundColor Yellow
        exit
    }
    default {
        Write-Host "Invalid choice. Exiting without changes." -ForegroundColor Red
        exit
    }
}

# Ask for scope
Write-Host ""
Write-Host "Select scope for the execution policy:" -ForegroundColor Cyan
Write-Host "1. CurrentUser (Recommended, doesn't require admin)" -ForegroundColor White
Write-Host "2. LocalMachine (Affects all users, requires admin)" -ForegroundColor White
Write-Host ""

$scopeChoice = Read-Host "Enter your choice (1-2)"

switch ($scopeChoice) {
    "1" {
        $scope = "CurrentUser"
    }
    "2" {
        $scope = "LocalMachine"
        if (-not $isAdmin) {
            Write-Host "Warning: LocalMachine scope requires administrator privileges." -ForegroundColor Red
            Write-Host "The command may fail. Consider restarting this script as Administrator." -ForegroundColor Red
        }
    }
    default {
        Write-Host "Invalid choice. Using CurrentUser scope." -ForegroundColor Yellow
        $scope = "CurrentUser"
    }
}

# Set the execution policy
try {
    Write-Host ""
    Write-Host "Setting execution policy to $policy for scope $scope..." -ForegroundColor Cyan
    Set-ExecutionPolicy -ExecutionPolicy $policy -Scope $scope -Force
    Write-Host "Execution policy successfully set to $policy for $scope!" -ForegroundColor Green
} catch {
    Write-Host "Failed to set execution policy: $_" -ForegroundColor Red
    Write-Host "Try running this script as Administrator if you selected LocalMachine scope." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "You can now try running 'npm run dev' to start the development server." -ForegroundColor Cyan
Write-Host "Alternatively, use the run-dev.bat file which bypasses PowerShell." -ForegroundColor Cyan

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 