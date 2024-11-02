const CommandProcessor = require('./commands/CommandProcessor');

if (process.stdin.isTTY) {
  console.log('Please provide commands (press Ctrl+C to exit):');
  process.stdin.setEncoding('utf8');
}

const commandProcessor = new CommandProcessor();

process.stdin.on('data', (chunk) => {
  const commands = chunk.trim().split('\n');
  for (const command of commands) {
    commandProcessor.process(command);
  }
});

process.stdin.on('error', (error) => {
  console.error('Error reading input:', error);
  process.exit(1);
});
