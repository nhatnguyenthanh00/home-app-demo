import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesingLocationComponent } from './housesing-location.component';

describe('HousesingLocationComponent', () => {
  let component: HousesingLocationComponent;
  let fixture: ComponentFixture<HousesingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousesingLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousesingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
