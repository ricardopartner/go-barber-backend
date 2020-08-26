import { Router } from "express";
import appointmentsRoute from "./appointments.route";

const routers = Router();

routers.use('/appointments', appointmentsRoute);


export default routers;
