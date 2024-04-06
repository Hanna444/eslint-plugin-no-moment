const fs = require("fs");
const path = require("path");

// Read the contents of the current directory
const ruleFiles = fs.readdirSync(__dirname)
  // Filter out the current file (index.js), test files, and ensure it's not a directory
  .filter(file => {
    const fullPath = path.join(__dirname, file);
    const isFile = fs.statSync(fullPath).isFile(); // Check if it's a file and not a directory
    return isFile && file.endsWith('.js') && file !== "index.js" && !file.endsWith("test.js");
  });

// Create rules object
const rules = Object.fromEntries(
  ruleFiles.map(file => {
    const ruleName = path.basename(file, ".js");
    return [ruleName, require("./" + file)];
  }),
);

module.exports = { rules };
