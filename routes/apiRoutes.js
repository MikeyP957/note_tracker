// load data
const fs = require('fs');

// Routing

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile('../db/db.json', (err, data) => {
            if (err) throw err;
            
            else res.end(data)             
        })
        
    });

    app.post('/api/notes', (req, res) => {
      
    })
}