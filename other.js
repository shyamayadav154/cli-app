import fs from "fs/promises";

export const pageFileDefaultData = (filePath) => {
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
};

export const pageFileUtilsData = (filePath) => {
  const pageName = convertStringToCamelCase(filePath);
  let title = reverseConvertStringWithDelimiter(
    filePath,
  );

  return `
export const ${pageName}Page 								=							new PageMeta(${title}, '/${filePath}' , faBell)

`;
};

export const updateFile = async (filePath, contentToAdd) => {
  try {
    await fs.appendFile(filePath, contentToAdd);
    console.log("File updated successfully.");
  } catch (err) {
    console.error("Error updating file:", err);
  }
};

export function toPascalCase(inputString) {
  return inputString.replace(/(\w)(\w*)/g, function (_, firstChar, restOfWord) {
    return firstChar.toUpperCase() + restOfWord.toLowerCase();
  });
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

  const wordsInSingleQuote = reversedString.split(delimiter).map(word => `'${word}'`).join(delimiter);
 return wordsInSingleQuote

}
