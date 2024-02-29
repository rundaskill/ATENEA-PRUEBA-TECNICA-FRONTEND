import { CityModel } from './City.model';

export interface AreaModel {
  id: number;
  name: string;
  description: string;
  city: CityModel;
}
