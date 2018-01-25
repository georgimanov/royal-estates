import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstateDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estate-details',
  templateUrl: 'estate-details.html',
})
export class EstateDetailsPage {
  estate: any = {}; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estate = this.navParams.get('estate');
  }

  ionViewDidLoad() {
  // ??    this.estate = this.navParams.get('estate');

    console.log('ionViewDidLoad EstateDetailsPage');
  }
}
