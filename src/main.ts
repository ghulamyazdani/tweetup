import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/tweet', (req, res) => {
    res.send(req.query);
})
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}/`);
});
