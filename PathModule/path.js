const path=require("path");

console.log(path.dirname("C:/Users/Lenovo/OneDrive/Desktop/Node js/PathModule/path.js"));
console.log(path.extname("C:/Users/Lenovo/OneDrive/Desktop/Node js/PathModule/path.js"));//this tells the extension  of particular file
console.log(path.basename("C:/Users/Lenovo/OneDrive/Desktop/Node js/PathModule/path.js"));//this tells the name  of particular file
console.log(path.parse("C:/Users/Lenovo/OneDrive/Desktop/Node js/PathModule/path.js"));//this returns the object whose properties represent the significant elements of the path
const mypath=path.parse("C:/Users/Lenovo/OneDrive/Desktop/Node js/PathModule/path.js");//this returns the object whose properties represent the significant elements of the path
console.log(mypath.name);
