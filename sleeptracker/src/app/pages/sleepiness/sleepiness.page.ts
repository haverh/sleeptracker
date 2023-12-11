import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { RangeCustomEvent } from '@ionic/angular';
import { SleepService } from 'src/app/services/sleep.service';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  sleepinessData: StanfordSleepinessData[] = []
  
  recentSleepinessLogs: StanfordSleepinessData[] = []

  sValue:number = 1;
  scaleString:string | undefined = '';
  dayOfWeek:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  month:string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  isDisabled:boolean = false;
  isViewAllOpen:boolean = false;


  constructor(private service:SleepService, private storageService:StorageService) {
    this.storageService.sortData()
    this.sleepinessData = this.storageService.sleepinessData;

    this.storageService.sortRecent()
    this.recentSleepinessLogs = this.storageService.recentSleepinessLogs;
  }

  ngOnInit() {
    this.scaleString = StanfordSleepinessData.ScaleValues[this.sValue];
  }

  // Get range value
  rangeChange(ev: Event) {
    this.sValue = Number((ev as RangeCustomEvent).detail.value);
    this.scaleString = StanfordSleepinessData.ScaleValues[this.sValue];
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

  // Log Sleepiness
  logSleepiness() {
    let sleepinessdata:StanfordSleepinessData = new StanfordSleepinessData(this.sValue)
    
    this.sleepinessData.push(sleepinessdata)
    this.storageService.set('sleepinessStorage', this.sleepinessData)
    this.storageService.updateRecent('sleepiness')
    this.recentSleepinessLogs = this.storageService.recentSleepinessLogs;
    
    this.isDisabled = true
    setTimeout(() => {
      this.isDisabled=false;
    }, 3000)
  }

  // Hide/show view all modal
  setViewAll(bool:boolean) {
    this.isViewAllOpen = bool
  }
}
