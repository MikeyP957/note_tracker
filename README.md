# note_tracker

## Overview
This application is an example of a simple note taker that takes in user information and then saves and displays the user input on the webpage. The back end of this app uses Express.js to retrieve and update data from a json file. The front end code fetches this data and displays it on the notes page. 

## Usage
When the user opens the page they are presented with a loading page that links to the notes page where they can view and update notes to the page. 
[Display](img/display_page.png)

[Display](img/display_noteT.png)

Writing and saving can easily be done by first typing into the designated input containers (title and message), and then clicking the save icon found in the top right of the page. The new notes title will then be displayed in the left hand column of the notes page after the page is refreshed. 
1. [Note](img/Screen Shot 2021-03-11 at 9.23.47 PM.png)

1. [Write note](img/write_note.png)

1. [Note Saved](img/note_saved.png)

To view the note message the user must click on the desired note and then the full message will be displayed.

[Check Note](img/check_note.png)


## Deoployment
This application runs with no errors and is almost complete. At the moment the application can save notes to the server and display them, however, the funcationality to delete a note is still in development. The front side shows an icon to delete a note but when clicked does nothing. Otherwise, the application works and uploads the notes when the page is refreshed. 

## Technology 
This application uses a few different technologies for it to function.
Back end:
1. Express.js - Get, and Post functions
1. Node.js
1. NPM - uniqid is used to create a unique id for each updated note

Front End
1. Bootstrap CDN- for styling the page
1. Javascript- for functionality of the page

## URL

[Note Tracker URL](https://mikeyp957.github.io/note_tracker/.)