import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: NavigationComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'sleep',
            loadChildren: () => import('./pages/sleep/sleep.module').then((m) => m.SleepPageModule),
          },
          {
            path: 'sleepiness',
            loadChildren: () => import('./pages/sleepiness/sleepiness.module').then((m) => m.SleepinessPageModule),
          }
        ],
      },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
