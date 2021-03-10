// load data
const fs = require('fs');
const uniqid = require('uniqid');

// Routing

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile('../db/db.json', (err, data) => {
            if (err) throw err;
            
            else { 
                let notes = JSON.parse(data);
                res.end(notes);
            }
        })
        
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = uniqid();
        console.log(newNote, "this is newNote")

        let writeNote = JSON.stringify(newNote);

        fs.writeFile('../db/db.json', writeNote, (err) => {
            if (err) throw err;
            console.log('Data written to db.json')
        })
      
    })
}