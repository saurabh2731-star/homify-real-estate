import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studios } from './studios';

describe('Studios', () => {
  let component: Studios;
  let fixture: ComponentFixture<Studios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
