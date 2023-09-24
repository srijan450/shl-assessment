const test = {
  role: "assistant",
  content:
    "const searchQuery = {\n" +
    "  backend: { $regex: 'Python', $options: 'i' }\n" +
    "};\n" +
    "console.log(JSON.stringify(searchQuery));",
};
const startIndex = test.content.indexOf("const searchQuery = {");
const endIndex = test.content.indexOf("};", startIndex) + 1;
const extractedQuery = test.content
  .substring(startIndex, endIndex)
  .replace("const searchQuery = ", "");
const x = eval(`(${extractedQuery})`);

console.log(x);
console.log(x.backend);
