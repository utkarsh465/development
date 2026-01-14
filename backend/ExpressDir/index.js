const express = require ('express');

const app = express();
// console.dir(app);

// let port = 3000;
let port = 8080;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

// app.use((req,res) =>{
//     console.log('New request received:');
// });

// FOR REQUEST DETAILS


// app.use((req,res) =>{
//     console.log(req);
//     console.log('New request received:');
// });


// FOR RESPONSE DETAILS

// app.use((req,res) =>{
//     console.log(res);
//     console.log('New request received:');
//     // res.send('Hello from Express Server');
//     res.send({
//         fruit:"apple",
//         colour:"red",
//     });
// });
// app.use((req,res) =>{
//     console.log(res);
//     console.log('New request received:');

//     let code = "<h1>fruits</h1> <ul><li>apple</li> <li>apple</li></ul>";
//     res.send(code);
// });


// ROUTING IN EXPRESS

// app.get('/', (req,res) =>{
//     res.send('you are at the path');
// });


// app.get('/apple', (req,res) =>{
//     res.send({
//         fruit:"apple",
//         colour:'red',
//     });
// });

// app.get('/orange', (req,res) =>{
//     res.send({
//         fruit:"orange",
//         colour:'orange',
//     });
// });

// app.get('/banana', (req,res) =>{
//     res.send({
//         fruit:"banana",
//         colour:'yellow',
//     });
// });

// app.post('/', (req,res) =>{
//     res.send('you send a post request to root path');
// });


// #PATH PARAMETERS

// app.get("/:username/:id", (req, res) =>{
//     let {username, id} = req.params;
//     let htmlStr = `<h1>welcome to the @${username} and ID is ${id}</h1>`;
//     res.send(htmlStr);
// });


// #QUERY STRINGS


// app.get("/search", (req, res) =>{
//     console.log(req.query);
//     res.send('<h1>Check the server console for query details</h1');
// });



app.get("/search", (req, res) =>{
    let {q} = req.query;
    if(!q){
        res.send('<h1>Please provide a search query</h1>');
    }
    let htmlStr = `<h1>Search results for: ${q}</h1>`;
    res.send(htmlStr);
});
