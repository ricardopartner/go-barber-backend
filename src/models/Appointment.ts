import { v4 as uuid } from "uuid";

export default class Appointment {

  public id: string

  constructor(public provider: string, public date: Date) {
    this.id = uuid();
  }
}
