// load data
const fs = require('fs');
const uniqid = require('uniqid');
const util = require('util')
// const notesData = require('../db/db.json')



// Routing

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            let notes = JSON.parse(data);
            if (err) throw err;
            
            else return res.json(notes)
                             
         })
    });
    
    app.post('/api/notes', (req, res) => {
        const fileJson = fs.readFileSync('./db/db.json', 'utf8')
        dataArray = JSON.parse(fileJson)
        
        console.log(dataArray)

        const newNote = {
            title: req.body.title, 
            text: req.body.text,
            id: uniqid()
        };

        dataArray.push(newNote)

        console.log(dataArray)

        fs.writeFile('./db/db.json', JSON.stringify(dataArray), (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
        
        // notesData.push(newNote)
   //readfile -> array
   //push new note into the array
   //writefile
        

        // res.json(newNote);
    })
}