const express = require('express');
const bodyParser = require('body-parser')
const caseRouter = require('./cases/caseRouter')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.redirect('/cases')
})

app.use('/cases', caseRouter)

app.listen(3000, () => {
    console.log("Express server listening on port 3000 :D");
});