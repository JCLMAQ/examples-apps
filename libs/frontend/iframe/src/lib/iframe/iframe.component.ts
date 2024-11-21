
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';
// Base on: https://frontendinterviewquestions.medium.com/iframe-in-angular-2c8010c87166

@Component({
  selector: 'lib-iframe',
  standalone: true,
  imports: [
    SafePipe
],
  templateUrl: './iframe.component.html',
  styleUrl: './iframe.component.scss',
})
export class IframeComponent {
  iframeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.example.com');
  }
}
