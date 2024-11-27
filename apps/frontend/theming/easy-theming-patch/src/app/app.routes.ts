import { Route } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { PanelsComponent } from './pages/panels/panels.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { TableComponent } from './pages/table/table.component';
import { TabsComponent } from './pages/tabs/tabs.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'buttons',
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'inputs',
    component: InputsComponent,
  },
  {
    path: 'progress',
    component: ProgressComponent,
  },
  {
    path: 'dialog',
    component: DialogComponent,
  },
  {
    path: 'panels',
    component: PanelsComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'dialog',
    component: DialogComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
];
