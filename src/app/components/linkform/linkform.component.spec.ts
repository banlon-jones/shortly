import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkformComponent } from './linkform.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UrlService} from "../../services/url.service";

describe('LinkformComponent', () => {
  let component: LinkformComponent;
  let fixture: ComponentFixture<LinkformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkformComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [UrlService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should have input field of type url', () => {
    const page = fixture.nativeElement
    const input = page.querySelectorAll('input');
    expect(input.length).toBeGreaterThanOrEqual(1);
    expect(input[0].type).toBe('url');

  });

  it('form should have submit button with text shorten it!', () => {
    const page = fixture.nativeElement
    expect(page.querySelector('.submit-button').type).toBe('submit');
    expect(page.querySelector('.submit-button').value).toBe('Shorten it!');
  });
});
