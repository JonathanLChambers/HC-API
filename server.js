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
        id: Number,
        name: String,
        value: Number,
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

    /* blackWidow = new Hero({
        name: "Black Widow",
        value: 100,
        range: 7,
        wheel: [{
            stats: {
                attack: 1,
                defense: 2,
            },
            skills: [2,3,1]
        },
        {
            stats: {
                attack: 4,
                defense: 5,
            },
            skills: [1]
        }]
    })
 */

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
    //db.collection.dropIndexes();
    var someHero = new Hero(req.body)
    someHero._id = new mongoose.Types.ObjectId
    /* var someHero = new Hero({
        _id: new mongoose.Types.ObjectId,
        id: req.body.id,
        name: req.body.name,
        value: req.body.value,
        range: req.body.range,
        wheel: req.body.wheel
    }) */
    //someHero._id = new mongoose.Types.ObjectId
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
    res.status(200).send('you got all the heroes. sincere congratulations, I dont think I could have done it without you :)')
})
router.put('/hero/:id', function(req, res) {
    res.status(200).send('Hello world')
})
router.delete('/hero/:id', function(req, res) {
    res.status(200).send('Hello world')
})
