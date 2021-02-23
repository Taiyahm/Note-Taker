// Installed dependencies
const PATH = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Returns saved notes data to the user
function updateDB() {
  fs.writeFile("./db/db.json", JSON.stringify(PATH), function (err) {
    if (err) throw err;
    return true;
  });
}


module.exports = function (app) {
  app.get("/api/", function (req, res) {
    res.json(index);
  });

  // Returns saved notes when clicked on
  app.get("/api/notes", function (req, res) {
    res.json(PATH);
  });
 
  // Post route to recive new notes amd return the saved notes
  app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    newNote.id = uuidv4();
    PATH.push(newNote);
    res.json(newNote);
    updateDB();
  });

  // deletes saved notes
  app.delete("/api/notes/:id", function (req, res) {
    var deleteNote = req.params.id;

    for (var i = 0; i < PATH.length; i++) {
      if (deleteNote == PATH[i].id) {
        PATH.splice(i, 1);
      }
    }
    res.send(PATH);

  });
};

