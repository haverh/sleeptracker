import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepPageRoutingModule } from './sleep-routing.module';

import { SleepPage } from './sleep.page';
import { NavigationModule } from '../../components/navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepPageRoutingModule,
    NavigationModule
  ],
  declarations: [SleepPage]
})
export class SleepPageModule {}
