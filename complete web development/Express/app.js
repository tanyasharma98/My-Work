const express = require("express");
const { fstat } = require("fs");
const app = express();
const path = require("path")
const fs = require("fs")
const port = 80;


// Express Specific Stuff
app.use('/static', express.static('static'))// For  Static File
app.use(express.urlencoded());

// PUG Specific Stuff
app.set('view engine', 'pug')// Set template engine as pug
app.set('views', path.join(__dirname, 'views'))// Set the view directory

// ENDPOINTS
app.get('/',(req , res)=>{
    const con = "this is the best content of the world"
    const params = {'title': 'Pubg is the best game', 'content': con}
    res.status(200).render('index.pug', params)
})

app.post('/',(req, res)=>{
    // console.log(req.body);
    Name = req.body.Name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address    
    more = req.body.more  

    let outputToWrite =`The name is the client is ${Name} , ${age} years old ${gender} , residing at ${address}.More about Client: ${more}`
    fs.writeFileSync('output.txt', outputToWrite )
    const params = {'message': 'Your Form has been submitted succesfully'}
    res.status(200).render('index.pug', params)
})


// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
});

