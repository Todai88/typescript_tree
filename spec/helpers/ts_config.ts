// tslint:disable-next-line:no-var-requires
const TSConsoleReporter = require("jasmine-ts-console-reporter");

jasmine.getEnv().clearReporters(); // Clear default console reporter

/* TSConsoleReporter
*/
jasmine.getEnv().addReporter(new TSConsoleReporter());
