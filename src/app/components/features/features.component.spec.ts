import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesComponent } from './features.component';

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 cards', () => {
    const page = fixture.debugElement.nativeElement;
    expect(page.querySelectorAll('.card').length).toBeGreaterThanOrEqual(3);
  });

  it('should have heading Advanced Statistics', () => {
    const page = fixture.debugElement.nativeElement;
    expect(page.querySelector('.feat-intro').innerText).toBe('Advanced Statistics');
  });
});
