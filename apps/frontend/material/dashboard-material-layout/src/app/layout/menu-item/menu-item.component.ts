
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterModule, ...MATERIAL],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  readonly menu = input<Menu>([]);
}
