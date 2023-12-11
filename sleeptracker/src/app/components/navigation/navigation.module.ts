import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'sleep',
        loadChildren: () => import('../../pages/sleep/sleep.module').then( m => m.SleepPageModule)
      },
      {
        path: 'sleepiness',
        loadChildren: () => import('../../pages/sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
      },
]


@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})

export class NavigationModule{}