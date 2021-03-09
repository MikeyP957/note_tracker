//Dependencies
const express = require('express');
const path = require('path');

//Routing
module.exports = (app) => {


    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
  
    
    //if no matching route, then defaule to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}