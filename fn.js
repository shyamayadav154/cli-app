// const fs = require('fs');
// const path = require('path');

import fs from "fs";
import path from "path";


import { fileURLToPath } from "url";

// Get the directory path of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import makeDir from "make-dir";

async function createFolderAndFile(directoryPath) {
  const path =await makeDir(__dirname+'/'+directoryPath);
    console.log(path)
}

// Example usage
const inputDirectory = "/path/to/your/directory.ts";
createFolderAndFile(inputDirectory);
