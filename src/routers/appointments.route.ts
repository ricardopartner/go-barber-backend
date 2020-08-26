import { Router, request, response } from 'express';
import { uuid } from "uuidv4";
const appointmentsRoute = Router();

const appointments = [];
appointmentsRoute.post('/', (request, response) => {
  const { provider, date } = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  }

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRoute;
