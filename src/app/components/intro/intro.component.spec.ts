import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button', () => {
    const page = fixture.nativeElement;
    expect(page.querySelectorAll('button').length).toBeGreaterThanOrEqual(1);
  });

  it('should have a get started button', () => {
    const page = fixture.nativeElement;
    expect(page.querySelector('button').innerText).toBe('Get Started');
  });

  it('should have title', () => {
    const page = fixture.nativeElement;
    expect(page.querySelector('.intro-heading').innerText).toBe('More than just shorter links');
  });
});
