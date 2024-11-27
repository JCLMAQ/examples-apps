import { Component, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ThemingService } from './services/theming.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ...MATERIAL,
    ThemeSelectorComponent,
    MainMenuComponent
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'easy-theming-patch';
  themeSelectorOpen = signal(false);
  themingService = inject(ThemingService);

  setTheme = effect(() => {
    document.body.style.setProperty(`--primary`, this.themingService.primary());
    document.body.style.setProperty(
      `--primary-light`,
      this.themingService.primaryLight()
    );
    document.body.style.setProperty(`--ripple`, this.themingService.ripple());
    document.body.style.setProperty(
      `--primary-dark`,
      this.themingService.primaryDark()
    );
    document.body.style.setProperty(
      `--background`,
      this.themingService.background()
    );
    document.body.style.setProperty(`--error`, this.themingService.error());
  });
}
