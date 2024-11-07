import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    CommonModule,
      RouterModule,
      ...MATERIAL
        ],
  templateUrl: './pageheader.component.html',
  styleUrl: './pageheader.component.scss',
})
export class PageheaderComponent {

  @Input() icon?: string;

}
