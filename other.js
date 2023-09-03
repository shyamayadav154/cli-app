import fs from "fs/promises";

export const pageFileDefaultData = (filePath) => {
  let pageName = filePath.split(".")[0];
  pageName = toPascalCase(pageName);

  return `
import { Layout } from 'components'
import { ${pageName}Tabs } from 'data'
import { LCTabs } from 'grommet-ext'
import { ${pageName}Page } from 'utils/page'

function ${pageName}() {
	return (
		<main>
			<h1>${pageName} page</h1>
		</main>
	)
}

export default ${pageName}

${pageName}.getLayout = page => (
	<Layout page={${pageName}Page} breads={[${pageName}Page]}>
		<LCTabs tabs={${pageName}Tabs} />
		{page}
	</Layout>
)
`;
};

export const pageFileUtilsData = (filePath) => {
  let [folderName, pageName]= filePath.split("/");

    if(!pageName){
        pageName = folderName;
    }

  pageName = toPascalCase(pageName);

  return `
export const ${pageName}Page 								= 							new PageMeta('${pageName}', 															'/${filePath}', faBell)

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
