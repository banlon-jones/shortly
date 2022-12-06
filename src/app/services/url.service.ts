import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {UrlResponseEntity} from '../models/responseEntity';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  registerShortenLink(link: string): Observable<UrlResponseEntity> {
    return this.http.post<UrlResponseEntity>(`${this.baseUrl}shorten?url=${link}`, link);
  }

}
