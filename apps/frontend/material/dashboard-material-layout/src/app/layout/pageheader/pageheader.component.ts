import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pageheader.component.html',
  styleUrl: './pageheader.component.scss',
})
export class PageheaderComponent {

  @Input() icon?: string;

}
