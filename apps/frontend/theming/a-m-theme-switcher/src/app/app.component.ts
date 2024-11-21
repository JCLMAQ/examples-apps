import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

// According: https://medium.com/@Zikey/angular-material-switch-your-theme-with-ease-34734924724a
// Warning: still a m2 material theming

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HomeComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'a-m-theme-switcher';
}
