/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require("chalk");

export class LogService {
  green(text: string) {
    console.log(chalk.green(text));
  }

  red(text: string) {
    console.log(chalk.red(text));
  }

  yellow(text: string) {
    console.log(chalk.yellow(text));
  }

  blue(text: string) {
    console.log(chalk.blue(text));
  }

  magenta(text: string) {
    console.log(chalk.magenta(text));
  }

  cyan(text: string) {
    console.log(chalk.cyan(text));
  }

  white(text: string) {
    console.log(chalk.white(text));
  }

  black(text: string) {
    console.log(chalk.black(text));
  }

  gray(text: string) {
    console.log(chalk.gray(text));
  }

  grey(text: string) {
    console.log(chalk.grey(text));
  }

  empty() {
    console.log("");
  }
}
