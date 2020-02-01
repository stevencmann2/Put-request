const express = require('express');

const app = express(); 

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Serveris starting on PORT, ', 8080)
})

