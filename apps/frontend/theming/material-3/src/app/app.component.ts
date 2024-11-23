import { Component, effect, signal } from '@angular/core';
// import { MatCheckbox } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';

@Component({
  standalone: true,
  imports: [RouterModule,
   ...MATERIAL,
    // MatCheckbox
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-3';
  events: string[] = [];
  opened: boolean | undefined;

  darkTheme = signal(false);

  DENSITY_LEVELS = ['maximum', 0, '-1', '-2', '-3', '-4', 'minimum'];

  density = signal(1);

  constructor() {
    effect(() => {
      document.body.classList.toggle('dark', this.darkTheme());
    });

    effect(() => {
      // remove density-* classes
      document.body.classList.forEach((className) => {
        if (className.startsWith('density-')) {
          document.body.classList.remove(className);
        }
      });

      // add density-* class
      document.body.classList.add(`density-${this.density()}`);
    });
  }
}
