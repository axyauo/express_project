const path = require('path');
const express = require('express');
const hbs = require('hbs')
const app = express();
const port = 8000;
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath)

app.get("/", (req, res)=>{
    res.render("index");
});
app.get("/about", (req, res)=>{
    res.render("about"); 
});
app.get("/weather", (req, res)=>{
    res.render("weather");
});
app.get("*", (req, res)=>{
    res.render("404error");
});

app.listen(port, ()=>{
    console.log(`Listining from the port number ${port}`);
})