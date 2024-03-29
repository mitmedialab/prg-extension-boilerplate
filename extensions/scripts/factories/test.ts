import chalk from "chalk";
import { copyTemplateToDestination, getDirectoryArg } from ".";

const directory = getDirectoryArg();
const destination = copyTemplateToDestination(directory, "index.test.ts");

const msg = [
  chalk.greenBright("Success! A test file has been added to your extension at:"),
  chalk.cyan(`\n\n\t${destination}\n`),
];

console.log(...msg);