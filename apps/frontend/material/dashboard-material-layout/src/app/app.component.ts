import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ...MATERIAL
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard-material-layout';
}
