// Needed dependencies
const path = require("path");
const fs = require("fs")
const db = require(".db/db.json");
const { v4: uuidv4 } = require("uuid");

module.exports = function(app) => {

// GET Route for homepage
app.get("./api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/./db/db.json"))
});

app.post("./api/notes", (req, res) => {

    let data = fs.readFileSync("db/db.json");
    data = JSON.parse(db);
    res.json(data);

    let newNote = {
    title: req.body.title,
    text: req.body.text,
    id = uuidv4()
    };

    data.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(data));

    res.json(data);
});

app.delete("/api/notes/:id", (req, res) => {

    let data = JSON.parse(fs.readFileSync("db/db.json"));
    let deleteNote = data.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));

    res.JSON(deleteNote);
});
};