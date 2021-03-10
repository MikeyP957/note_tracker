// load data
const fs = require('fs');
const uniqid = require('uniqid');
const util = require('util')
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Routing

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            let notes = JSON.parse(data);
            if (err) throw err;
            
            else { 
                
                    return res.json(notes)
                }             
         })
     });

    app.post('/api/notes', (req, res) => {
        const newNote = {title: req.title, text: req.text};

        console.log(req.body, 'req.body')

    //     // newNote.id = uniqid();
    //     console.log(newNote, "this is newNote")

       // let writeNote = JSON.stringify(newNote);

      // return writeFileAsync('./db/db.json', JSON.stringify(newNote))
     
    })
}