// const hello="hello world";
// console.log(hello);

//Blocking synchronous way//

//to read and write file in node we can use fs module

const fs=require('fs');//to import
// const textIn=fs.readFileSync('./Node/fs.txt', 'utf-8');//to read
// console.log(textIn);

// const textFile=`my name is Rajasurya R`;
// fs.writeFileSync('./Node/fs.txt',textFile);//to update the same file
// fs.writeFileSync('./Node/output.txt',textFile);//to create new file
// console.log("create 👍");

//Non-Blocking asynchronous way//
fs.readFile('./txt/fs.txt','utf-8',(err,data)=>{
    // console.log(data);
    fs.readFile(`./txt/${data}.txt`,'utf-8',(err,data1)=>{
        console.log(data1);
    });
});
console.log("first run");

