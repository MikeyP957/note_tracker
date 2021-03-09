//Dependencies

const path = require('path');

//Routing
module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/'));
    });
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });


    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/assets/js/index.js'));
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/assets/css/style.css'));
    });
    //if no matching route, then defaule to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}