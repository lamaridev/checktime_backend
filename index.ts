import  express, { Application }  from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import { ConnectionDB } from './config/db';
const app: Application = express();
require('dotenv').config();

const port = process.env.PORT;
const  authEndpoint = process.env.AUTH_ENDPOINT;
const  userEndpoint = process.env.USER_ENDPOINT;
const  appareilEndpoint = process.env.APPAREIL_ENDPOINT;
const  companyEndpoint = process.env.COMPANY_ENDPOINT;
const  departementEndpoint = process.env.DEPARTEMENT_ENDPOINT;
const  employeEndpoint = process.env.EMPLOYE_ENDPOINT;
const  posteEndpoint = process.env.POSTE_ENDPOINT;
const  zoneEndpoint = process.env.ZONE_ENDPOINT;

import AuthRouter from './src/routers/auth'; 
import UserRouter from './src/routers/user'; 
import AppareilRouter from './src/routers/appareil'; 
import CompanyRouter from './src/routers/company'; 
import DepartementRouter from './src/routers/departement'; 
import EmployeRouter from './src/routers/employe'; 
import PosteRouter from './src/routers/poste'; 
import ZoneRouter from './src/routers/zone'; 
import { VerifyAccessToken } from './src/utils/jwt-utils';

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(`/${process.env.MAIN_ENDPOINT}/${authEndpoint}`, AuthRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${userEndpoint}`, UserRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${appareilEndpoint}`,VerifyAccessToken, AppareilRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${companyEndpoint}`,VerifyAccessToken, CompanyRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${departementEndpoint}`,VerifyAccessToken, DepartementRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${employeEndpoint}`,VerifyAccessToken, EmployeRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${posteEndpoint}`,VerifyAccessToken, PosteRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${zoneEndpoint}`,VerifyAccessToken, ZoneRouter);


app.listen(port, async ()=>{
    console.log(`server on ${port}`);
    await ConnectionDB();
})