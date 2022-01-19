import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import {tweet} from './tweet';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req:Request, res:Response) => {
    res.send(`<h1>GET THE TWEET BY ADDING USERNAME</h1>`)
})
app.get('/tweet', (req:Request, res:Response) => {
    res.send(tweet(req.query));
})
app.listen(port,()=>{
    console.log(`listening on http://${process.env.HOST}:${port}/`);
});
