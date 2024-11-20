import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    MatSidenav,
    MatIconButton,
    MatIcon,
    MatIconModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  // SideNav Variables
  readonly sidenav = viewChild.required(MatSidenav);
  isMobile = true;
  isCollapsed = true;
  toggleMenu() {
    // Responsive sidebar management open/close
    if (this.isMobile) {
      this.sidenav().toggle();
    } else {
      this.sidenav().open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
