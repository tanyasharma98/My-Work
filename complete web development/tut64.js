const fs = require("fs");
let text = fs.readFileSync("tan.txt","utf-8");
text= text.replace("browser", "Rohan");
console.log("The content of the file is");
console.log(text);

console.log("Creating a new file inside");
fs.writeFileSync("rohan.txt",text);