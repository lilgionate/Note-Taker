const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');

// Define an API endpoint to retrieve all notes
router.get('/api/notes', async (req, res) => {
    // Read the contents of the 'db.json' file and parse it as JSON
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

    // Respond with the parsed JSON data
    res.json(dbJson);
});

// Define an API endpoint to add a new note
router.post('/api/notes', (req, res) => {
    // Read the contents of the 'db.json' file and parse it as JSON
    const dbJson = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

    // Create a new note object with a unique ID using uuidv4
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };

    // Add the new note to the existing data
    dbJson.push(newFeedback);

    // Write the updated data back to the 'db.json' file
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));

    // Respond with the updated JSON data
    res.json(dbJson);
});

// Define an API endpoint to delete a note by ID
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync('db/db.json', 'utf8');
    const dataJSON = JSON.parse(data);

    // Filter out the note with the specified ID
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });

    // Write the filtered data back to the 'db.json' file
    fs.writeFileSync('db/db.json', JSON.stringify(newNotes));

    // Respond with a message indicating successful deletion
    res.json({ message: 'Note deleted' });

});

// Export the router for use in other files
module.exports = router;