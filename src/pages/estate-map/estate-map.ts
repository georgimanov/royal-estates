import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var window: any;

@IonicPage()
@Component({
  selector: 'page-estate-map',
  templateUrl: 'estate-map.html',
})
export class EstateMapPage {
  map: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let estate = this.navParams.get('estate');
    this.map = {
      lat: estate.latitude,
      lng: estate.longitude,
      zoom: 12,
      markerLabel: estate.address 
    };
  }

  getDirections() { 
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`; 
  }
}
