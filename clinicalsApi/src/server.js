import express from 'express';
import bodyParser from 'body-parser';
import props from './config/properties';
import db from './config/db';
import clinicalRoutes from './routes';
import cors from 'cors';

db();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

const clinicalRouter = express.Router();
clinicalRoutes(clinicalRouter);
app.use('/clinicalapi',clinicalRouter);

app.listen(props.PORT,(err)=>{
    if(err) throw err;
    console.log("Application is running on Port: "+props.PORT);
})