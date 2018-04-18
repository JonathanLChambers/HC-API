var express = require('express')
var bodyParser = require("body-parser")
var chalk = require('chalk')
var mongoose = require('mongoose')
var app = express()
var router = express.Router()
var ObjectId = mongoose.Schema.Types.ObjectId
var db
var Hero
//https://devcenter.heroku.com/articles/mean-apps-restful-api

app.use(bodyParser.json())
app.use('/api', router)

mongoose.connect('mongodb+srv://voidbunniez:Jc123456@heroclix-c5n8k.mongodb.net/test')
db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    app.listen(1000, function(err) {
        if (err) {
            console.log(chalk.red(err))
        } else {
            console.log(chalk.green('Everything connected properly~'))
            console.log(chalk.blue('Server Listening on port 1000!'))
        }
    })
    
    var heroSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        range: Number,
        wheel: [{
            stats: {
                attack: Number,
                defense: Number,
            },
            skills: [Number]
        }]
    })
    Hero = mongoose.model('Hero', heroSchema)

})

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

router.get('/hero', function(req, res) {
    Hero.find(function(err,heroes){
        if(err) return console.error(err)
        res.status(200).send(heroes)
    })
})
router.post('/hero', function(req, res) {
    var someHero = new Hero(req.body)
    someHero._id = new mongoose.Types.ObjectId
    someHero.save(function (err, someHero){
        if(err) return console.error(err)
    })
    res.status(200).send('you did it big boy')
})

router.get('/hero/delete', function(req, res) {
    mongoose.connection.db.dropDatabase();
    res.status(200).send('way to go you just dropped the database')
})
router.get('/hero/:id', function(req, res) {
    Hero.findOne({'id': req.params.id}, function(err, hero){
        if (err) {
            handleError(res, err.message, "Failed to fetch Hero with id: " + req.params.id);
        }else{
            if(!hero){
                res.status(400).send("failed to find hero with id: " + req.params.id)
            }else{
                res.status(201).send(hero)
            }
        }
    })
})
router.delete('/hero/:id', function(req, res) {
    Hero.deleteOne({'id': req.params.id}, function(err, hero){
        /* if (err) {
            handleError(res, err.message, "Failed to delete Hero with id: " + req.params.id);
        }else{
            if(!hero){
                res.status(400).send("failed to find hero with id: " + req.params.id)
            }
        } */
        res.end('thanks')
    })
})
router.put('/hero/:id', function(req, res) {
    res.status(200).send('Hello world')
})
