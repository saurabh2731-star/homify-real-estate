import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PentHouses } from './pent-houses';

describe('PentHouses', () => {
  let component: PentHouses;
  let fixture: ComponentFixture<PentHouses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PentHouses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PentHouses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
