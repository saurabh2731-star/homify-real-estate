import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studiodetails } from './studiodetails';

describe('Studiodetails', () => {
  let component: Studiodetails;
  let fixture: ComponentFixture<Studiodetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studiodetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studiodetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
