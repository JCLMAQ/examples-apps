import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [ CommonModule,
    RouterModule,
    ...MATERIAL],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() menu: Menu = [];
}
