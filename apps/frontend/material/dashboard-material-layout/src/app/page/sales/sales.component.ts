
import { Component } from '@angular/core';
import { MATERIAL } from '@fe/material';
import { PageheaderComponent } from "../../layout/pageheader/pageheader.component";

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    PageheaderComponent,
    ...MATERIAL
],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent {}
