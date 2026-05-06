import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRent } from './sell-rent';

describe('SellRent', () => {
  let component: SellRent;
  let fixture: ComponentFixture<SellRent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellRent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellRent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
