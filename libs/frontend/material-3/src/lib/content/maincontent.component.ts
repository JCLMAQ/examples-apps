import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent {}
