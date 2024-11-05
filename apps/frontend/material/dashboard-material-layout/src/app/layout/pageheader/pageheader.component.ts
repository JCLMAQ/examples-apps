import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pageheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pageheader.component.html',
  styleUrl: './pageheader.component.css',
})
export class PageheaderComponent {

  @Input() icon?: string;

}
