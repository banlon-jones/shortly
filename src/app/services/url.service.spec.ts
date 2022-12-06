import { TestBed } from '@angular/core/testing';

import { UrlService } from './url.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('UrlService', () => {
  let service: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(UrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
