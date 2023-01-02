const cucumber = require('cypress-cucumber-preprocessor').default;
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = (on) => {
  on('file:preprocessor', cucumber({
    nonGlobalStepDefinitions: true
  }));
    installLogsPrinter(on, {
    printLogsToConsole: 'always',
  });
};
