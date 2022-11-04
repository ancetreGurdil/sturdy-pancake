const express = require('express')
const app = express()
const articles = require('./donnees.json')
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, '')));



//get all articles
app.get('/articles', (req,res) => {  
    try  {
        return res.status(200).send(articles)
    } catch(error) {
        console.error(error);
        return res.status({message: "an error occured",status: 500})
    }    
})

//get one article by id
app.get('/articles/:id', (req,res) => {
    var id = parseInt(req.params.id)
    const article = articles.find(article => article.id === id)
        res.status(200).json(article)})

// modifier un article
app.put('/articles/new/:id', (req,res) => {   
    const id = parseInt(req.params.id)    
    let article = articles.find(article => article.id === id)
    console.log(article.name);
    article.name =req.body.name,    
    article.provenance =req.body.provenance,    
    article.type =req.body.type,    
    res.status(200).json(article)})

// supprimer un article
app.delete('/articles/delete/:id', (req,res) => {    
    const id = parseInt(req.params.id)    
    let article = articles.find(article => article.id === id)    
    articles.splice(articles.indexOf(article),1)    
    res.status(200).json(articles)})


app.listen(8080, () => {
        console.log("Serveur à l'écoute")})


app.get('/', (req, res) => { // Serve index page
    res.sendFile("index.html");
});

