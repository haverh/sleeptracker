import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goSleep() {
    console.log("SLEEPIN")
  }

  goSleepiness() {
    console.log("IM SLEEPY")
  }
}
