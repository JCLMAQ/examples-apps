import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@examples-apps/material-3-layout-lib';
import { MATERIAL } from '@fe/material';

@Component({
  standalone: true,
  imports: [LayoutComponent, RouterModule, MATERIAL],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-3-layout';
}
