import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { SleepService } from 'src/app/services/sleep.service';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})

export class SleepPage implements OnInit {
  overnightData: OvernightSleepData[] = []
  
  recentOvernightLogs: OvernightSleepData[] = []

  startDate:string = new Date().toISOString();
  startTime:string = new Date().toISOString();
  endDate:string = new Date().toISOString();
  endTime:string = new Date().toISOString();

  maxDate:Date = new Date();
  minDate:Date = new Date(new Date().setFullYear(this.maxDate.getFullYear() - 1));

  isViewAllOpen:boolean = false;
  isDisabled:boolean = false;
  
  constructor(private sleepService:SleepService, private storageService:StorageService) {
    this.storageService.sortData()
    this.overnightData = this.storageService.overnightData;

    this.storageService.sortRecent()
    this.recentOvernightLogs = this.storageService.recentOvernightLogs;
  }

  ngOnInit() {
  }

  // Hide/show view all modal
  setViewAll(bool:boolean) {
    this.isViewAllOpen = bool;
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

  // Log Sleep
  logSleep() {
    const sleepStart:Date = new Date(this.startDate)
    const sleepEnd:Date = new Date(this.endDate)
    let sleepdata:OvernightSleepData = new OvernightSleepData(sleepStart, sleepEnd)

    this.overnightData.push(sleepdata)
    this.storageService.set('overnightStorage', this.overnightData)
    this.storageService.updateRecent('overnight')
    this.recentOvernightLogs = this.storageService.recentOvernightLogs;

    this.isDisabled = true;
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000)
  }

  

}
