import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EstatesApiProvider } from '../../providers/estates-api';
import { EstatesPage } from '../pages';




@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  locations: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public estatesApi: EstatesApiProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({content: 'Getting locations...'});
    loader.present().then(() => {
      this.estatesApi.getLocations().subscribe(
        locations => {
          this.locations = locations;
          loader.dismiss();
        }
      );
    });
  }

  itemTapped($event, item) {
    this.navCtrl.push(EstatesPage, item);
  }
}
