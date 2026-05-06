import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLifestyle } from './blog-lifestyle';

describe('BlogLifestyle', () => {
  let component: BlogLifestyle;
  let fixture: ComponentFixture<BlogLifestyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLifestyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLifestyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
