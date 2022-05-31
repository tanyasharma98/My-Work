const express = require("express");
const { fstat } = require("fs");
const app = express();
const path = require("path")
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const port = 7000;


// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
  })

  const contact = mongoose.model('contact', contactSchema);

// Express Specific Stuff
app.use('/static', express.static('static'))// For  Static File
app.use(express.urlencoded());

// PUG Specific Stuff
app.set('view engine', 'pug')// Set template engine as pug
app.set('views', path.join(__dirname, 'views'))// Set the view directory

// ENDPOINTS
app.get('/',(req , res)=>{
   
    const params = {}
    res.status(200).render('home.pug', params)
})
app.get('/contact',(req , res)=>{
    const params = {}
    res.status(200).render('contact.pug', params)
})
app.post('/contact',(req , res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=> {
        res.send("This item has been save to the database")
    }).catch(()=>{
        res.status(400).send("Item  was not save to the database")
    })

    // res.status(200).render('contact.pug')
})



// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
});
