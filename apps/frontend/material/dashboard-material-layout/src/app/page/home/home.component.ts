
import { Component } from '@angular/core';
import { MATERIAL } from '@fe/material';
import { PageheaderComponent } from "../../layout/pageheader/pageheader.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageheaderComponent, ...MATERIAL],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
