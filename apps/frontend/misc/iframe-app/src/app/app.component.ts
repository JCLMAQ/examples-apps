import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IframeComponent } from '@examples-apps/iframe';


@Component({
  standalone: true,
  imports: [
    RouterModule,
    IframeComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iframe-app';
}
