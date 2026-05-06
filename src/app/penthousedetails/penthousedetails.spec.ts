import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Penthousedetails } from './penthousedetails';

describe('Penthousedetails', () => {
  let component: Penthousedetails;
  let fixture: ComponentFixture<Penthousedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Penthousedetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Penthousedetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
