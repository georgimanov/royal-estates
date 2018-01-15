import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationsPage } from '../locations/locations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLocationsPage() {
    this.navCtrl.push(LocationsPage);
  }

}
