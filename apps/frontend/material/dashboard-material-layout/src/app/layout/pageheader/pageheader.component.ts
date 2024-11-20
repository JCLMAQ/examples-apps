
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    RouterModule,
    ...MATERIAL
],
  templateUrl: './pageheader.component.html',
  styleUrl: './pageheader.component.scss',
})
export class PageheaderComponent {

  readonly icon = input<string>();

}
