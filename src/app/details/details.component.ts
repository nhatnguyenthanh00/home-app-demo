import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2>About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this house have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this house have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2>Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="sendForm()">
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            formControlName="firstName"
          />
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            formControlName="lastName"
          />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" formControlName="email"/>
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
      <button style="margin-top: 20px" class="primary" (click)="backToHome()">Back to home page</button>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  router = inject(Router);
  housinService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housinService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      });
  }

  sendForm(): void {
    let firstName = this.applyForm.value.firstName;
    let lastName = this.applyForm.value.lastName;
    let email = this.applyForm.value.email;
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    if(!firstName || !lastName || !email){
      alert('Please fill out all fields.');
    }else{
      alert('Request submitted! Check email for confirmation.');
      this.applyForm.reset();
    }
  }

  backToHome(): void {
    // navigate to home page
    this.router.navigate(['/']);
  }

}
