var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Data = require('../schema/Data');

const dbRoute =
    'mongodb+srv://lroyevans_db_user:Ke8VFICrG9QRQcxT@quotes.zavkiis.mongodb.net/?appName=Quotes';//*

mongoose.connect(dbRoute, {
  dbName: 'quoteDatabase' // Overrides any database specified in the URI string
});//*

let db = mongoose.connection;//*

db.once('open', () => console.log('connected to the database'));//*

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//*


/* GET home page. */
router.get('/quotes/', async (req, res, next) => {
    try {
        const data = await Data.find({});
        return res.json({ success: true, info: data });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message || err });
    }
});

router.get('/quotes/:quote', async (req, res, next) => {
    try {
        const data = await Data.find({quote: req.params.quote}); //may not be correct params
        console.log(data);
        return res.json({ success: true, info: data });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message || err });
    }
});

//localhost:3001/dealership

router.post('/quotes/', function (req, res, next) {
    console.log(req.body);
    let newQuote = req.body.quote;
    let newAuthor = req.body.author;
    console.log(newQuote);
    console.log(newAuthor);
    // dealership.push({id: idAssign, year: newYear, brand: newBrand, model: newModel});
    
    let stuffToAdd = new Data();
    stuffToAdd.quote = newQuote;
    stuffToAdd.author = newAuthor;

    stuffToAdd.save()

});

router.delete('/quotes/', async (req, res, next) => {
    try {
        const { quote, author, _id } = req.body;

        if (!_id) {
            return res.status(400).json({ success: false, error: '_id is required to perform deletion.' });
        }

        const deletedDealership = await Data.findOneAndDelete({ quote: quote, author: author, _id:_id });

        if (!deletedDealership) {
            return res.status(404).json({ success: false, error: `No dealership entry found matching _id: ${_id}` });
        }

        return res.json({ success: true, info: deletedDealership });
    } catch (err) {
        console.error('DELETE Error:', err);
        return res.status(500).json({ success: false, error: err.message || err });
    }
});

router.put('/quotes/', async (req, res, next) => {
    try {
        const { quote, author, _id } = req.body;
        const updatedQuote = await Data.findOneAndUpdate(
            { _id: _id }, // Match condition (filters by make/brand)
            { 
                quote: quote,
                author: author
            }, // Updated fields
            { new: true, runValidators: true } // Options: return modified doc & validate
        );
        if (!updatedQuote) {
            return res.status(405).json({ success: false, error: `No Quote entry found matching Id: ${same_id}` });
        }

        return res.json({ success: true, info: updatedQuote });
    } catch (err) {
        console.error('PUT Error:', err);
        return res.status(500).json({ success: false, error: err.message || err });
    }
});
module.exports = router;