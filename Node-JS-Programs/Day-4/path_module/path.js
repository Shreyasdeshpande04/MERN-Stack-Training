const path=require("path")
const filepath=path.join("folder","student","data.txt")
console.log("joint path",filepath);
const basename=path.basename(filepath)
console.log(basename);