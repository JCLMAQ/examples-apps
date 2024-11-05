import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
