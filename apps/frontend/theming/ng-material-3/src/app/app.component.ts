import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MATERIAL
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-material-3';
  isLightMode = true;
  isM3Theme = true;

  onThemeColorsToggle() {
    this.isLightMode = !this.isLightMode;
    document.querySelector('body')?.classList.toggle('dark');
  }

  onThemeToggle() {
    this.isM3Theme = !this.isM3Theme;
    document.querySelector('body')?.classList.toggle('m3');
  }
}
