const FileSystem = require('../models/FileSystem');

class CommandProcessor {
  constructor() {
    this.fs = new FileSystem();
  }

  process(command) {
    const [operation, ...args] = command.trim().split(/\s+/);

    try {
      switch (operation.toUpperCase()) {
        case 'CREATE':
          this.validateArgs(args, 1, 'CREATE <filename>');
          this.fs.create(args[0]);
          break;
        case 'MOVE':
          this.validateArgs(args, 2, 'MOVE <source> <destination>');
          this.fs.move(args[0], args[1]);
          break;
        case 'DELETE':
          this.validateArgs(args, 1, 'DELETE <filename>');
          this.fs.delete(args[0]);
          break;
        case 'LIST':
          this.fs.list();
          break;
        default:
          console.error(`Unknown command: ${operation}`);
          this.showHelp();
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  validateArgs(args, expectedLength, usage) {
    if (args.length < expectedLength) {
      throw new Error(`Invalid arguments. Usage: ${usage}`);
    }
  }

  showHelp() {
    console.log(`
Available commands:
    CREATE <filename>        - Create a new file
    MOVE <source> <dest>     - Move file from source to destination
    DELETE <filename>        - Delete a file
    LIST                     - List all files
            `);
  }
}

module.exports = CommandProcessor;
