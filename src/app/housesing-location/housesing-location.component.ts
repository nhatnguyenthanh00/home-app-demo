import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housesing-location',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" 
      alt="Exterior of a {{housingLocation.name}}"/>
      <h2 class="listing-header">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      <a routerLink="details/{{housingLocation.id}}">Learn more</a>
    </section>
  `,
  styleUrl: './housesing-location.component.css'
})
export class HousesingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
