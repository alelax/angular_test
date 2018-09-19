import { UserInterface } from "../interfaces/userInterface";

export class User implements UserInterface {
  id: number;
  name: string;
  lastname: string;
  fiscalcode: string;
  province: string;
  phone: string;
}