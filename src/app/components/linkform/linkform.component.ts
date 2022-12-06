import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlService} from '../../services/url.service';
import {Subscription} from 'rxjs';
import {Link, UrlResponseEntity} from '../../models/responseEntity';
import {ClipboardService} from 'ngx-clipboard';

@Component({
  selector: 'app-linkform',
  templateUrl: './linkform.component.html',
  styleUrls: ['./linkform.component.css']
})
export class LinkformComponent implements OnInit {
  subscription: Subscription | undefined;
  urlForm: FormGroup = new FormGroup({});
  shortenedLinks: Link[] = [];
  constructor(private urlService: UrlService, private clipboard: ClipboardService) { }

  ngOnInit(): void {
    this.shortenedLinks = this.getShortenLinksFromStorage();
    this.urlForm = new FormGroup({
      url: new FormControl('', [Validators.required])
    });
  }

  get urlFormControl(): { [key: string]: AbstractControl } {
    return this.urlForm.controls;
  }

  onSubmit(): void {
    if (this.urlForm.status === 'VALID'){
      this.subscription = this.urlService.registerShortenLink(this.urlForm.value.url).subscribe(
        (response: UrlResponseEntity) => {
          console.log(response);
          this.shortenedLinks.push(response.result);
          localStorage.setItem('shortenedLinks', JSON.stringify(this.shortenedLinks));
        }
      );
    }
    console.log(this.urlForm);
  }

  getShortenLinksFromStorage(): Link[]  {
    return JSON.parse(localStorage.getItem('shortenedLinks') as string);
  }

  copyLink(eventEmitter: any, link: string): void {
    this.clipboard.copy(link);
    eventEmitter.target.textContent = 'Copied!';
    eventEmitter.target.className = 'text-white btn bg-dark px-5 text-center col-12';
  }

}
