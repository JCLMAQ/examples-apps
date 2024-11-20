
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainContentComponent } from '../content/maincontent.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'lib-sidenavcontainer',
  standalone: true,
  imports: [SidebarComponent, MainContentComponent],
  templateUrl: './sidenavcontainer.component.html',
  styleUrl: './sidenavcontainer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavcontainerComponent {}
