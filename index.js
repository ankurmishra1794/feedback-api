const express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/", (req,res) => {
    console.log("Hi");
    res.send();
});

// app.post('/',(req,res) => {
//     console.log(req.body);        
//     var sampleObject = {
//         user: req.body.user,
//         feedback: {
//             answer1: req.body.feedback.answer1,
//             answer2: req.body.feedback.answer2,
//             comment: req.body.feedback.comment            
//         }        
//     };    
//     fs.readFile('data.json', function (err, data) {                
//         json1 = JSON.parse(data);                        
//         json1.push(sampleObject);    
//         fs.writeFile("data.json", JSON.stringify(json1,null,"  "), ()=>{
//             if(err) {
//                 return console.log(err);
//             }   
//             console.log("Data saved!");
//         });        
//     })  
//     res.send(); 
// });

app.listen(3001,()=>{
    console.log('server created');
});