import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';
import { ThemeManager } from './core/theme-manager.service';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ColorPickerComponent } from './shared/components/color-picker/color-picker.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ...MATERIAL,
    ColorPickerComponent,
    AlertComponent,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'course-m3';
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme);
  }

  changeFlatButtonFontSize(ev: Event) {
    const size = (ev.target as HTMLInputElement).value ?? '14';

    const targetElement = document.documentElement;
    targetElement.style.setProperty('--sys-label-large-size', size + 'px');
  }

  changeHeadingFontSize(ev: Event) {
    const size = (ev.target as HTMLInputElement).value ?? '56.992';

    const targetElement = document.documentElement;
    targetElement.style.setProperty('--sys-display-large-size', size + 'px');

    // setting the line-height relationally
    targetElement.style.setProperty('--sys-display-large-line-height', '1.25');

    // <h1> (and display-large) uses --sys-display-large, hence we also need to update that variable to see the changes
    targetElement.style.setProperty(
      '--sys-display-large',
      '400 var(--sys-display-large-size) / var(--sys-display-large-line-height) Roboto, sans-serif'
    );
  }
}
