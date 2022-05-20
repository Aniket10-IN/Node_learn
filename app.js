// console.log(__dirname);

// setInterval(() => {
//     console.log('hello world');
    
// },1000)

// let x = 'Sam'

// let sayHi = (name) => {
//     console.log(`my name is ${name}`);
    
// }

// sayHi(x)
// sayHi('Susy')

// const data = require('./1.utils.js')
// console.log(data);

// const data2 = require('./2.utils.js')
// console.log(data2);

// require('./2.utils.js')

// sync functions

// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./Content/test1.txt', 'utf8')
// const second = readFileSync('./Content/test2.txt', 'utf8')

// // console.log(first, second);

// writeFileSync(
//     './Content/result-sync1.txt',
//     `Here is the result : ${first}, ${second}`

// async functions

// const {readFile, writeFile} = require('fs')

// const first = readFile('./Content/test1.txt', 'utf8', (err,  result) =>{
//     if (err){
//         console.log(err);
//         // return
//     }

//     // console.log(result);

//     const first = result;

//     readFile('./Content/test2.txt','utf8' ,(err, result) =>{
//         if (err){
//             console.log(err);
//         }
//         const second = result

//         writeFile('./Content/result-sync.txt', 
//         `Here is the result : ${first}, ${second}`,
//         (err,result) =>{
//             if (err){
//                 console.log(err);
//             }
//             console.log(result);

//         })



//      })

// })

// Http Module

// const http = require('http');

// const server = http.createServer((req, res) =>{
//     res.write('Welcome to our homePage')
//     res.end()

// })

// server.listen(5000)

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to our homPage')
    }
    if (req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end('We cant seem to find the page you are looking for')
})

server.listen(5000)
