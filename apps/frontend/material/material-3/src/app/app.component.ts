import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@examples-apps/material-3-lib';

@Component({
  standalone: true,
  imports: [LayoutComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-3';
}
