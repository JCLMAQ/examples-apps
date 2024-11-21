import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidenavcontainerComponent } from '../sidenavcontainer/sidenavcontainer.component';

@Component({
  selector: 'lib-layout',
  standalone: true,
  imports: [NavbarComponent, SidenavcontainerComponent, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
