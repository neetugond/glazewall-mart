import express from 'express';
import cors from 'cors';
import data from './data.js'
// running express function and this function return object where web app
const app = express();
app.use(cors())

// create route by using app 2nd parameter callback function and http req and res
app.get('/api/products', (req, res) => {
    // return array we have data.js
    res.send(data.products);
});

const port = 5000;
app.listen(5000, () => {
    console.log(`server at http://localhost:${port}`)
})