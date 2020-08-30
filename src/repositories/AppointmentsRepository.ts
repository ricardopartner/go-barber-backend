import Appointment from "../models/Appointment";
import { isEqual } from "date-fns";

export default class AppointmentsRepository {
  private appointments: Appointment[] = [];


  public findByDate(date: Date): Appointment | null {
    const appointment = this.appointments.find(o => isEqual(o.date, date));
    return appointment || null;
  }

  public add(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);
    this.appointments.push(appointment);
    return appointment;
  }
}
