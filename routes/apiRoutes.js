// load data
const fs = require('fs');
const uniqid = require('uniqid');
const util = require('util')
const notesData = require('../db/db.json')

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

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

    //  fs.readFile('./public/assets/js/index.js', (err, content) => {
    //     if (err) throw err;
    //     let rendered = content.toString();
    //     return rendered;
    // })

    app.post('/api/notes', (req, res) => {
        
        const newNote = {
            title: req.body.title, 
            text: req.body.text,
            id: uniqid()
        };

        console.log(newNote, 'newNote object')
        
        notesData.push(newNote)
    //     // newNote.id = uniqid();
    //     console.log(newNote, "this is newNote")

    //    let writeNote = JSON.stringify(newNote);

    //   return fs.writeFile('./db/db.json', writeNote)
    console.log(notesData)
    
     res.json(notesData);
    })
}