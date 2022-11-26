const fs = require('fs');
//create a file
// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err)
//     console.log('Error encountered')
//     else{
//         console.log('file created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if (err)
//             console.log(err);
//             else
//             console.log(file);
//         });
//     }  
// });


// fs.rename('example.txt','example2.txt',(err)=>{
//   if(err)
//   console.log(err);
//   else
//   console.log('sucesfully renamed the file.');  
// });


// fs.appendFile('example2.txt','some data being appended',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('sucesfully appended the data on file.');
// });


fs.unlink('example2.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('Sucesfully deleted the file');
});
