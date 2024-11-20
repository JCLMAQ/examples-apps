
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-content',
  standalone: true,
  imports: [],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent {}
