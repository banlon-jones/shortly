import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have links', () => {
    const page = fixture.nativeElement;
    expect(page.querySelectorAll('a').length).toBeGreaterThanOrEqual(9);
  });

  it('should have social icons', () => {
    const page = fixture.nativeElement;
    expect(page.querySelectorAll('.social-icon').length).toBeGreaterThanOrEqual(4);
  });
});
