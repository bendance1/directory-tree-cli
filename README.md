# Directory Tree CLI

A command-line interface tool for manipulating directory trees in memory. This tool simulates filesystem operations without actually modifying the host system.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Examples](#examples)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- Node.js >= v16.18.0
- npm >= v8.19.2
- Operating System: Windows/Linux/macOS

## Installation

```bash
# Clone the repository
git clone https://github.com/bendance1/directory-tree-cli.git

# Navigate to project directory
cd directory-tree-cli

# Ensure correct Node.js version
node -v  # Should show v16.18.0

# Install dependencies with npm 8.19.2
npm install

# Optional: Install globally
npm install -g .
```

## Usage

```bash
npm start
```

## Commands

The tool supports the following commands:

| Command | Syntax                        | Description               | Example                |
| ------- | ----------------------------- | ------------------------- | ---------------------- |
| CREATE  | `CREATE <path>`               | Creates a new directory   | `CREATE fruits/apples` |
| MOVE    | `MOVE <source> <destination>` | Moves a directory         | `MOVE fruits foods`    |
| DELETE  | `DELETE <path>`               | Deletes a directory       | `DELETE fruits/apples` |
| LIST    | `LIST`                        | Shows directory structure | `LIST`                 |

## Examples

### Basic Directory Creation

```bash
CREATE fruits
CREATE vegetables
CREATE fruits/apples
LIST
```

Output:

```
fruits
  apples
vegetables
```

### Moving Directories

```bash
CREATE foods
MOVE fruits foods
MOVE vegetables foods
LIST
```

Output:

```
foods
  fruits
    apples
  vegetables
```

### Complete Example

The full example can be found in `examples/sample-commands.txt`:

## Project Structure

```
directory-tree-cli/
├── src/
│   ├── models/
│   │   ├── Directory.js     # Directory class implementation
│   │   └── FileSystem.js    # FileSystem class implementation
│   ├── commands/
│   │   └── CommandProcessor.js     # CommandProcessor class implementation
│   └── index.js            # Main entry point
├── tests/
│   └── models/
│       ├── Directory.test.js
│       └── FileSystem.test.js
├── examples/
│   └── sample-commands.txt  # Sample input commands
└── [Configuration files]
```

## Development

### Setting Up Development Environment

```bash
# Verify Node.js version
node -v  # Should be v16.18.0

# Verify npm version
npm -v   # Should be 8.19.2

# Install dependencies
npm install
```

### Running Tests

```bash
# Run all tests
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with Node.js v16.18.0 and npm 8.19.2
