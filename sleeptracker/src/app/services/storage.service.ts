import { EventEmitter, Injectable, Output } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { SleepService } from './sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  overnightData: OvernightSleepData[] = [];
  sleepinessData: StanfordSleepinessData[] = [];
  
  recentOvernightLogs: OvernightSleepData[] = [];
  recentSleepinessLogs: StanfordSleepinessData[] = [];
  maxRecent: number = 3;

  readyState: boolean = false;
  @Output() notifyReady: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.init().then(()=>{
      this.readyState = true;
      this.notifyReady.emit(this.readyState);
    });
  }

  // Set or get data to initialize arrays
  async init() {
    // this.set("overnightStorage", SleepService.AllOvernightData)
    // this.set("sleepinessStorage", SleepService.AllSleepinessData)

    this.get("overnightStorage").then((retrievedArray) =>{
      retrievedArray.forEach((data:any) => {
        const oData = new OvernightSleepData(new Date(data.sleepStart), new Date(data.sleepEnd), new Date(data.loggedAt))
        this.overnightData.push(oData)
      })
      this.sortData()
    })

    this.get("sleepinessStorage").then((retrievedArray) =>{
      retrievedArray.forEach((data:any) => {
        const sData = new StanfordSleepinessData(data.loggedValue, new Date(data.loggedAt))
        this.sleepinessData.push(sData)
      })
      this.sortData()
      this.initRecent()
    })
  }

  // Set value in storage given key
  async set(key: string, value: any): Promise<void> {
    await Storage.set({ key, value: JSON.stringify(value) });
  }

  // Get value with key from storage
  async get(key: string): Promise<any> {
    const { value } = await Storage.get({ key });
    return value ? JSON.parse(value) : null;
  }

  // Initial population of recent logs
  initRecent() {
    let temp:number = 1;
    while (temp <= this.maxRecent && this.overnightData.length >= temp) {
      this.recentOvernightLogs.push(this.overnightData[this.overnightData.length - temp])
      temp += 1
    }

    temp = 1
    while (temp <= this.maxRecent && this.sleepinessData.length >= temp) {
      this.recentSleepinessLogs.push(this.sleepinessData[this.sleepinessData.length - temp])
      temp += 1
    }

    this.sortRecent()
  }

  // Sort recent logs array by logged date in ascending order
  sortRecent() {
    this.recentOvernightLogs.sort((a, b) => {
      const dateA = new Date(a.loggedAt).getTime()
      const dateB = new Date(b.loggedAt).getTime()
      
      return dateA - dateB;
    })

    this.recentSleepinessLogs.sort((a, b) => {
      const dateA = new Date(a.loggedAt).getTime()
      const dateB = new Date(b.loggedAt).getTime()
      
      return dateA - dateB;
    })
  }

  // Sort all logs array by logged date in ascending order
  sortData() {
    this.overnightData.sort((a, b) => {
      const dateA = new Date(a.loggedAt).getTime()
      const dateB = new Date(b.loggedAt).getTime()
      return dateA - dateB;
    })

    this.sleepinessData.sort((a, b) => {
      const dateA = new Date(a.loggedAt).getTime()
      const dateB = new Date(b.loggedAt).getTime()
      return dateA - dateB;
    })
  }

  // Update list of recent logs
  updateRecent(type:string) {
    if ( type == 'overnight') {
      if (this.recentOvernightLogs.length === this.maxRecent) {
        this.recentOvernightLogs = this.recentOvernightLogs.slice(1)
      }
      this.recentOvernightLogs.push(this.overnightData[this.overnightData.length - 1])
    } else {
      if (this.recentSleepinessLogs.length === this.maxRecent) {
        this.recentSleepinessLogs = this.recentSleepinessLogs.slice(1)
      }
      this.recentSleepinessLogs.push(this.sleepinessData[this.sleepinessData.length - 1])
    }
    
  }
}
