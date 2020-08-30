import { Router } from 'express';
import { startOfHour, parseISO, } from "date-fns";
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRoute = Router();
const repository = new AppointmentsRepository();

appointmentsRoute.post('/', (request, response) => {
  const { provider, date } = request.body;
  const _date = startOfHour(parseISO(date));
  const findAppointmentInSameDate = repository.findByDate(_date);

  if (findAppointmentInSameDate) {
    return response.status(400).json({ message: 'This appointment is already booked' });
  }

  const appointment = repository.add(provider, _date);
  return response.json(appointment);
});

export default appointmentsRoute;
