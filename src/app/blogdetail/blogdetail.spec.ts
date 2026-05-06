import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetail } from './blogdetail';

describe('Blogdetail', () => {
  let component: Blogdetail;
  let fixture: ComponentFixture<Blogdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
