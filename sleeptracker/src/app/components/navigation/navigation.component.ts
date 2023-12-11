import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent  implements OnInit {

  constructor(public navCtrl: NavController, public router: Router) { }

  ngOnInit() {}

  goToSleepPage() {
    console.log(this.navCtrl)
    this.router.navigateByUrl('/sleep')
  }

  goToSleepinessPage() {
    this.router.navigate(["sleepiness"])
  }

}
