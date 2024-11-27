import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MatListModule, RouterLink, RouterLinkActive],
  template: `
    <div class="menu-container">
      <mat-nav-list>
        @for (route of routes; track route.route) {
        <a
          routerLinkActive
          #rla="routerLinkActive"
          mat-list-item
          routerLink="/{{ route.route }}"
          [activated]="rla.isActive"
          >{{ route.label }}</a
        >
        }
      </mat-nav-list>
    </div>
  `,
  styles: `

  .menu-container {
    padding: 8px;
  }

  `,
})
export class MainMenuComponent {
  routes: { label: string; route: string }[] = [
    {
      label: 'Buttons',
      route: 'buttons',
    },
    {
      label: 'Inputs',
      route: 'inputs',
    },
    {
      label: 'Progress',
      route: 'progress',
    },
    {
      label: 'Dialog',
      route: 'dialog',
    },
    {
      label: 'Panels',
      route: 'panels',
    },
    {
      label: 'Table',
      route: 'table',
    },
    {
      label: 'Stepper',
      route: 'stepper',
    },
    {
      label: 'Tabs',
      route: 'tabs',
    },
  ];
}
