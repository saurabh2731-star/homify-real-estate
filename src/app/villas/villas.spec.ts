import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Villas } from './villas';

describe('Villas', () => {
  let component: Villas;
  let fixture: ComponentFixture<Villas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Villas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Villas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
