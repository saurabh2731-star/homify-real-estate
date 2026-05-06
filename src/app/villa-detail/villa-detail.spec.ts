import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaDetail } from './villa-detail';

describe('VillaDetail', () => {
  let component: VillaDetail;
  let fixture: ComponentFixture<VillaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillaDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillaDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
