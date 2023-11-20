import chalk from "chalk";
import fs from "fs";

function returnError(errorMessage) {
  throw new Error(chalk.red(errorMessage.code, "Erro ao tentar ler arquivo"));
}
function getFile(file) {
  const encoding = "utf-8";
  fs.promises
    .readFile(file, encoding)
    .then((text) => console.log(chalk.greenBright(text)))
    .catch(returnError);
}
// function getFile(file) {
//   const encoding = "utf-8";
//   fs.readFile(file, encoding, (error, text) => {
//     if (error) returnError(error);

//     console.log(chalk.yellowBright(text));
//   });
// }

getFile("./files/text.md");
