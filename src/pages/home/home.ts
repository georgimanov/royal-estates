import { Component } from '@angular/core';
import { LocationsPage } from '../locations/locations';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { UserSettingsProvider } from '../../providers/user-settings';
import { EstateHomePage } from '../pages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  favoriteEstates = [];
  constructor(public navCtrl: NavController, public loadingController: LoadingController, public userSettings: UserSettingsProvider) {
  }

  goToLocationsPage() {
    this.navCtrl.push(LocationsPage);
  }

  favoriteTapped($event, item){
    let loader = this.loadingController.create({
        content: 'Getting data...'
    });
    loader.present();
    loader.dismiss();

    let estateHomeData = {estate: item.estate, locationId: item.locationId, locationName: item.locationName};
    console.log(estateHomeData);

    this.navCtrl.push(EstateHomePage, estateHomeData);
  }

  ionViewDidEnter(){
    let loader = this.loadingController.create({
      content: 'Loading favorite estates...'
    });
    this.initFavorites();
    loader.present();
    loader.dismiss();
  };

  async initFavorites(){
    try {
      var val = await this.userSettings.getAllFavorites();
      this.favoriteEstates = val;
    }
    catch(err) {
        console.log('Error: ', err.message);
    }
  }

  getLocation (estate){
    let address = estate.address;
    let res = address.split(",");
   
    return res[res.length - 1].trim();
  }
}
