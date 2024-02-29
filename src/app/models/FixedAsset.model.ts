import { AreaModel } from './Area.model';
import { CityModel } from './City.model';
import { PersonModel } from './Person.model';

export interface FixedAssetModel {
  id?: number;
  name: string;
  description: string;
  type: string;
  serial: string;
  inventory_number: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  purchaseValue: number;
  purchaseDate: string;
  currentState: string;
  color: string;
  area: AreaModel;
  person: PersonModel;
  city: CityModel;
}
