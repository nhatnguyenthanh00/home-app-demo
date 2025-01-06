import { Component, inject } from '@angular/core';
import { HousesingLocationComponent } from "../housesing-location/housesing-location.component";
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousesingLocationComponent],
  template:`
  <section>
    <form>
        <input type="text" placeholder="Filter by city" #searchText/>
        <button type="button" class="primary" (click)="filterLocations(searchText.value)">Search</button>
    </form>
  </section>
  <section class="results">
    @for (item of filterHousingLocationList ; track item.id){
      <app-housesing-location [housingLocation]="item"></app-housesing-location>
    }
    <!-- <app-housesing-location></app-housesing-location> -->
  </section>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filterHousingLocationList: HousingLocation[] = [];

  constructor(){
    this.housingService.getAllHousingLocations().then((data : HousingLocation[]) => {
      this.housingLocationList = data;
      this.filterHousingLocationList = data;
    });
  }

  filterLocations(text: string){
    if(!text){
      this.filterHousingLocationList = this.housingLocationList;
      return ;
    }
    this.filterHousingLocationList = this.housingLocationList.filter((location: HousingLocation) => {
      return location.city.toLowerCase().includes(text.toLowerCase());
    });
  }
}
