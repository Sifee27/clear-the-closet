# Clear the Closet

Clear the Closet is a web application focused on LGBTQ+ education, advocacy, and policy information.

## Features

- **Legislation Tracker**: Stay informed about current LGBTQ+ related legislation
- **Queer Civics 101**: Educational resources about LGBTQ+ history and rights
- **Voices & Victories**: Highlighting stories and successes from the community
- **Take Action**: Tools for advocacy and making a difference

## Prerequisites

- Node.js (version 20.x or higher recommended)
- npm (included with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clear-the-closet.git
cd clear-the-closet
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Using the Batch File (Windows)

For Windows users who may encounter PowerShell execution policy issues:

1. Run the included batch file:
```
run-dev.bat
```

### Using npm (All Platforms)

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5173
```

## Troubleshooting

If you encounter issues running the application:

1. **PowerShell Execution Policy**: If using PowerShell and encountering execution policy restrictions:
```powershell
# Run PowerShell as Administrator and execute:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

2. **Clean Installation**: If you're having dependency issues:
```bash
# Remove existing dependencies
rm -rf node_modules
rm package-lock.json

# Reinstall dependencies
npm install
```

3. See the [TROUBLESHOOTING.md](TROUBLESHOOTING.md) file for more detailed help.

## Technologies Used

- React
- TypeScript
- Chakra UI
- React Router
- Vite

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/         # Page components
  ├── theme.ts       # Chakra UI theme customization
  ├── App.tsx        # Main app component
  └── main.tsx       # Entry point
```

## Acknowledgments

- Thanks to all contributors and supporters
- Special thanks to LGBTQ+ activists and organizations fighting for equality

## Contact

For questions or feedback, please open an issue or contact us at [your-email@example.com]. 