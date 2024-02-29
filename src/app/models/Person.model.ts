import { CityModel } from './City.model';

export interface PersonModel {
  id: number;
  first_name: string;
  last_name: string;
  city: CityModel;
}
