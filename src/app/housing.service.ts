import { Injectable } from '@angular/core';
import {HousingLocation} from './housing-location'
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = []
  private url = "http://localhost:9999/locations";
  async getAllHousingLocations(): Promise <HousingLocation[]> {
    try{
      const data = await fetch(this.url);
      if(!data.ok){
        throw new Error('Failed to fetch data locations!! HTTP status: ' + data.status);
      }
      return await data.json() ?? [];
    } catch (error){
      console.error('Failed to fetch data locations!!', error);
      return [];
    }
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    try{
      const data = await fetch(this.url + '/' + id);
      if(!data.ok){
        throw new Error('Failed to fetch data location detail!! HTTP status: ' + data.status);
      }
      return await data.json() ?? {};
    } catch (error){
      console.error('Failed to fetch data location detail!!', error);
      return undefined;
    }
  }
  constructor() { }
}
