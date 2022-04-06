const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 9000;

app.use(express.json());

const pathToFrontend = path.join(`${__dirname}/../frontend`);

app.use('/public', express.static(`${pathToFrontend}/public`));

app.get('/', (req, res) => {
    res.sendFile(`${pathToFrontend}/index.html`);
});

app.get('/image/list', (req, res) => {
    res.sendFile(`${pathToFrontend}/data.json`)
})





app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});