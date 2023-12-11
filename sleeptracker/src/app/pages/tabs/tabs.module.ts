import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { SleepPage } from '../sleep/sleep.page';
import { SleepinessPage } from '../sleepiness/sleepiness.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children : [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'sleep',
        loadChildren: () => import('../sleep/sleep.module').then( m => m.SleepPageModule)
      },
      {
        path: 'sleepiness',
        loadChildren: () => import('../sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,  
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
