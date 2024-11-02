const CommandProcessor = require('./commands/CommandProcessor');
const commandProcessor = new CommandProcessor();

console.log('Please provide commands (press Ctrl+C to exit):');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  const input = chunk.toString();
  const commands = chunk.trim().split('\n');
  for (const command of commands) {
    commandProcessor.process(command);
  }
});

process.stdin.on('error', (error) => {
  console.error('Error reading input:', error);
  process.exit(1);
});
