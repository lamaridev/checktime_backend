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
const  congeEndpoint = process.env.CONGE_ENDPOINT;
const  presenceEndpoint = process.env.PRESENCE_ENDPOINT;
const  absenceEndpoint = process.env.ABSENCE_ENDPOINT;
const  planningEndpoint = process.env.PLANNING_ENDPOINT;




import AuthRouter from './src/routers/auth'; 
import UserRouter from './src/routers/user'; 
import AppareilRouter from './src/routers/appareil'; 
import CompanyRouter from './src/routers/company'; 
import DepartementRouter from './src/routers/departement'; 
import EmployeRouter from './src/routers/employe'; 
import PosteRouter from './src/routers/poste'; 
import ZoneRouter from './src/routers/zone'; 
import CongeRouter from './src/routers/conge';
import PresenceRouter from './src/routers/presence';
import AbsenceRouter from './src/routers/absence';
import PlanningRouter from './src/routers/planning';


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
app.use(`/${process.env.MAIN_ENDPOINT}/${congeEndpoint}`,VerifyAccessToken, CongeRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${presenceEndpoint}`,VerifyAccessToken, PresenceRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${absenceEndpoint}`,VerifyAccessToken, AbsenceRouter);
app.use(`/${process.env.MAIN_ENDPOINT}/${planningEndpoint}`,VerifyAccessToken, PlanningRouter);


app.listen(port, async ()=>{
    console.log(`server on ${port}`);
    await ConnectionDB();
})