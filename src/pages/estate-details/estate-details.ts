import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-estate-details',
  templateUrl: 'estate-details.html',
})
export class EstateDetailsPage {
  estate: any = {}; 
  isFollowing: boolean = false; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.estate = this.navParams.get('estate');

    console.log('ionViewDidLoad EstateDetailsPage');
  }

  toggleFavorites(){
      this.isFollowing = !this.isFollowing;
  }
}
