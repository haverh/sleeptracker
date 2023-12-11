import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { SleepService } from '../../services/sleep.service';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { FormStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	isOvernightViewAllOpen: boolean = false;
  isSleepinessViewAllOpen: boolean = false;
	
  overnightData: OvernightSleepData[] = []
  sleepinessData: StanfordSleepinessData[] = []
  
  recentOvernightLogs: OvernightSleepData[] = []
  recentSleepinessLogs: StanfordSleepinessData[] = []

  constructor(private sleepService:SleepService, private storageService:StorageService) {
    this.storageService.sortData()
    this.overnightData = this.storageService.overnightData;
    this.sleepinessData = this.storageService.sleepinessData;

    this.storageService.sortRecent()
    this.recentOvernightLogs = this.storageService.recentOvernightLogs;
    this.recentSleepinessLogs = this.storageService.recentSleepinessLogs;
  }

	ngOnInit() {
	}

  // Hide/show respective view all modal given type
  setViewAll(type:string, bool:boolean) {
    if ( type === "overnight" ) {
      this.isOvernightViewAllOpen = bool;
    } else {
      this.isSleepinessViewAllOpen = bool;
    }
  }

  sortArray(array: any[]): any[] {
    // Sort data by logged date in ascending order
    const sortedArray = array.slice().sort((a, b) => {
      const dateA = new Date(a.loggedAt).getTime()
      const dateB = new Date(b.loggedAt).getTime()
      return dateA - dateB;
    })
    return sortedArray;
  }
}