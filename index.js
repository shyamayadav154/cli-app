#!/usr/bin/env node

import fs from "fs";
import fsPromise from "fs/promises";
import path from "path";
import inquirer from "inquirer";
import { program } from "commander";
import { fileURLToPath } from "url";
import fsextra from "fs-extra";

// Get the directory path of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up Commander
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

        // Create the "pages" directory if it doesn't exist
        if (!fs.existsSync(pagesDirectory)) {
          fs.mkdirSync(pagesDirectory);
        }

        // update the "utils" directory if it doesn't exist
        if (!folderNameInput.includes("/")) {
          await fsextra.outputFile(
            "pages/" + folderNameInput + "/index.js",
            pageFileDefaultData(folderNameInput),
          );

          updateUtilPageFile(
            utilsPagesDirectory,
            pageFileUtilsData(folderNameInput),
          );

          return;
        }

        // Create the folder and files if it doesn't exist
        if (!fs.existsSync(folderNameInput)) {
          await fsextra.outputFile(
            "pages/" + folderNameInput + ".js",
            pageFileDefaultData(folderNameInput),
          ).then(() => {
            console.log(
              `File  /pages/${folderNameInput}.js created successfully`,
            );
          });
        } else {
          console.log("File already exists");
        }

        updateUtilPageFile(
          utilsPagesDirectory,
          pageFileUtilsData(folderNameInput),
        );
      });
  });

// Parse the command-line arguments
program.parse(process.argv);



function pageFileDefaultData(filePath) {
  let pageName = convertStringToCamelCase(filePath);
  let tabName = filePath.split("/").pop();

  tabName = toPascalCase(tabName);

  return `
import { Layout } from 'components'
import { ${tabName}Tabs } from 'data'
import { LCTabs } from 'grommet-ext'
import { ${pageName}Page } from 'utils/page'

function ${tabName}() {
	return (
		<main>
			<h1>${tabName} page</h1>
		</main>
	)
}

export default ${tabName}

${tabName}.getLayout = page => (
	<Layout page={${pageName}Page} breads={[${tabName}Page]}>
		<LCTabs tabs={${tabName}Tabs} />
		{page}
	</Layout>
)
`;
}

const toPascalCase=(inputString)=> {
  return inputString.replace(/(\w)(\w*)/g, function (_, firstChar, restOfWord) {
    return firstChar.toUpperCase() + restOfWord.toLowerCase();
  });
}

function pageFileUtilsData(filePath) {
  const pageName = convertStringToCamelCase(filePath);
  let title = reverseConvertStringWithDelimiter(
    filePath,
  );

  return `
export const ${pageName}Page 								=							new PageMeta(${title}, '/${filePath}' , faBell)

`;
}

function convertStringToCamelCase(inputString) {
  // Split the input string by '/'
  const words = inputString.split("/");

  // Capitalize the first letter of each word and join them together
  const camelCaseString = words.map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join("");

  // Add "Page" to the end of the camelCaseString
  const resultString = camelCaseString;

  return resultString;
}

function reverseConvertStringWithDelimiter(inputString, delimiter = "||") {
  // Use regular expression with capture groups to replace and capitalize words
  const convertedString = inputString.replace(
    /\/(\w)/g,
    (_, match) => ` ${delimiter} ${match.toUpperCase()}`,
  );

  // Capitalize the first letter of the first word
  const finalString = convertedString.charAt(0).toUpperCase() +
    convertedString.slice(1);

  // Split the string by the delimiter, reverse the array, and join it back
  const reversedString = finalString.split(delimiter).reverse().join(delimiter);

  const wordsInSingleQuote = reversedString.split(delimiter).map((word) =>
    `'${word}'`
  ).join(delimiter);
  return wordsInSingleQuote;
}

async function updateUtilPageFile(filePath, contentToAdd) {
  try {
    await fsPromise.appendFile(filePath, contentToAdd);
    console.log("File updated successfully.");
  } catch (err) {
    console.error("Error updating file:", err);
  }
}
