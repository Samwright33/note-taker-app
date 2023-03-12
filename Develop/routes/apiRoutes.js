// Needed dependencies
const path = require("path");
const fs = require("fs")
const uniqid = require("uniqid")

module.exports = (app) => {

// GET Route for homepage
app.get("/api/notes", (req, res) => {
  const db = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  res.json(JSON.parse(db));
});

app.post("/api/notes", (req, res) => {

    const db = fs.readFileSync(path.join(__dirname, "../db/db.json"));
    const notes = JSON.parse(db);
    
    const userNote = {

    title: req.body.title,
    text: req.body.text,
    id: uniqid()
    };

    notes.push(userNote);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
    res.json(userNote);
});

app.delete("/api/notes/:id", (req, res) => {
  const db = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  const notes = JSON.parse(db);
  const deleteNotes = notes.filter((note))
    fs.writeFileSync(path.join(__dirname,"../db/db.json"), JSON.stringify(deleteNote));

    res.JSON(deleteNote);
});
};