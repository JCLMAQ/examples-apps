import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL } from '@fe/material';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output() menuToggled = new EventEmitter<boolean>();

  user= 'Enea';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }


}
