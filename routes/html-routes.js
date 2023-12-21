const router = require('express').Router();
const path = require('path');

// Route for the root path ('/')
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Route for the '/notes' path
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;