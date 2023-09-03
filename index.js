#!/usr/bin/env node

import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { program } from "commander";
import { fileURLToPath } from "url";
import {
  pageFileDefaultData,
  pageFileUtilsData,
  updateFile as updateUtilPageFile,
} from "./other.js";
import makeDir from "make-dir";
import fsextra from "fs-extra";

// Get the directory path of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up Commander
// const program = new commander.Command();
program.version("1.0.0");

// Define command
program
  .description(
    "Create a new index.js file inside a provided folder in the pages directory",
  )
  .action(() => {
    const pagesDirectory = path.join(__dirname, "pages");
    const utilsPagesDirectory = path.join(
      __dirname,
      "utils",
      "page",
      "index.js",
    );
    inquirer
      .prompt([
        {
          type: "input",
          name: "folderName",
          message: "Enter the name of the page:",
          validate: (input) => {
            if (input.trim() === "") {
              return "Folder name cannot be empty.";
            }
            return true;
          },
        },
      ])
      .then(async (answers) => {
        const folderNameInput = answers.folderName;
        if (folderNameInput.includes(" ")) {
          throw new Error("Folder name cannot contain spaces.");
        }
        const folderName = path.dirname(folderNameInput);
        const fileName = path.basename(folderNameInput);

        //
        // let [folderName, fileName] = folderNameInput.split("/");
        // const hasFileName = fileName ? true : false;
        // fileName = hasFileName ? fileName + ".js" : "index.js";
        //
        // const folderPath = path.join(pagesDirectory, folderName);
        //
        // const filePath = path.join(
        //   folderPath,
        //   fileName,
        // );

        // Create the "pages" directory if it doesn't exist
        if (!fs.existsSync(pagesDirectory)) {
          fs.mkdirSync(pagesDirectory);
        }

        // Create the input folder if it doesn't exist
        // if (!fs.existsSync(folderPath)) {
        //   fs.mkdirSync(folderPath);
        // }

        if (!fs.existsSync(folderNameInput)) {
                    await fsextra.outputFile('pages/'+folderNameInput+'.js', pageFileDefaultData(fileName))
        }

        //if file doesnot exist create it
        if (!fs.existsSync(folderNameInput) && !fs.existsSync(fileName)) {
          fs.writeFileSync(
            path.join(pagesDirectory,folderName,fileName+".js"),
            pageFileDefaultData(fileName),
          );
        }

        // fillPageData(
        //   folderName,
        //   filePath,
        //   fileName,
        //   pageFileDefaultData(fileName),
        // );

        updateUtilPageFile(
          utilsPagesDirectory,
          pageFileUtilsData(folderNameInput),
        );
      });

  });

function fillPageData(folderName, filePath, fileName, pageFileDefaultData) {
  console.log({ folderName, filePath });
  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    console.error(
      `File '${fileName}' already exists in '${folderName}' folder.`,
    );
  } else {
    fs.writeFileSync(
      filePath,
      pageFileDefaultData,
    );
    console.log(
      `File '${fileName}' created in '${folderName}' folder inside pages directory.`,
    );
  }
}

// Parse the command-line arguments
program.parse(process.argv);
