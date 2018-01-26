import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController, ToastController  } from 'ionic-angular';
import _ from 'lodash';
import { UserSettingsProvider } from '../../providers/user-settings';
import { EstatesApiProvider } from '../../providers/estates-api';

@IonicPage()
@Component({
  selector: 'page-estate-details',
  templateUrl: 'estate-details.html',
})
export class EstateDetailsPage {
  estate: any = {}; 
  isFavorite: boolean = false; 
  location: any = {};

  constructor(public navParams: NavParams, public alertController: AlertController, public toastController: ToastController, public userSettings: UserSettingsProvider, public estateApi: EstatesApiProvider) {
  }

  ionViewDidLoad() {
    this.estate = this.navParams.get('estate');
    this.userSettings
      .isFavoriteEstate(this.estate.id)
      .then(value => this.isFavorite = value);
  }

  toggleFavorites(){
    if(this.isFavorite) {
      let confirm = this.alertController.create({
        title: "Unfavorite?",
        message: "Are you sure you want to remove from saved estates?",
        buttons: [
          {
            text: "Yes",
            handler: () => {
              this.isFavorite = false;
              this.userSettings.unfavoriteEstate(this.estate);
              let toast = this.toastController.create({
                message: "You have unfavorited this estate!",
                duration: 2000,
                position: "bottom"
              });
              toast.present();
            }
          },
          {
            text: "No"
          }
        ]
      });
      confirm.present();
    } else {
      this.isFavorite = true;
      let location = this.estateApi.getCurrentLocation();

      console.log(location);

      this.userSettings.favoriteEstate(this.estate, location.location.id, location.location.name);
    }
  }
}
