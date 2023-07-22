// const amount = 12;
// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

// console.log(`hey! its my first node js app !!!!`)

// console.log(__dirname)

// const names = require("./4-names")
// const sayHi = require("./5-utils")
// const sh = require("./6-alternative-flavor")
// require("./7-mind-grenade")

// console.log(sh)

// sayHi("susan")
// sayHi(names.john)
// sayHi(names.peter)

// --------------------------OS MODULES --------------------------------------
// const os = require("os")
// const user = os.userInfo()
// console.log(user)
// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOs);

// --------------------------Path MODULES --------------------------------------
// const path = require("path");
// //console.log(path.sep);

// const filePath = path.join("/content","/subfolder","test.txt")
// console.log(filePath );

// --------------------------File system MODULES - sync --------------------------------------

// const {readFileSync, writeFileSync} = require("fs")

// const first = readFileSync('./content/first.txt', "utf-8");
// const second = readFileSync('./content/second.txt', "utf-8");

// console.log(first, second)

// const third = writeFileSync('./content/third.txt',"here is the third one" )







// --------------------------File system MODULES - async --------------------------------------
// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf-8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;

//     writeFile(
//       "./content/fourth.txt",
//       `this is combined file: ${first} and ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         const second = result;
//       }
//     );
//   });
// });









// --------------------------File system MODULES - async vs sync--------------------------------------






// --------------------------HTTP SERVER--------------------------------------
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.write("hello there");
//     res.end();
// })

// server.listen(5000);









// --------------------------HTTP Module (more features)--------------------------------------

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if (req.url === '/') {
//         res.end('Welcome to our home page')
//       } else if (req.url === '/about') {
//         res.end('Here is our short history')
//       } else {
//         res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//         `)
//       }
// });



// server.listen(5000);







// --------------------------NPM INFO--------------------------------------
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems)
