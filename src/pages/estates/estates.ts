import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EstateHomePage  } from '../pages';
import { EstatesApiProvider } from '../../providers/estates-api';
import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-estates',
  templateUrl: 'estates.html',
})
export class EstatesPage {
  private currentLocationEstates: any;
  private allEstateLocations: any;
  estates: any = [];
  queryText: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public estatesApi: EstatesApiProvider, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
     
    let selectedLocation = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });
    loader.present().then(() => {
      this.estatesApi.getLocationData(selectedLocation.id).subscribe(data => {
        this.currentLocationEstates = data.estates;
        this.allEstateLocations =
          _.chain(data.estates)
          .groupBy('region')
          .toPairs()
          .map(item => _.zipObject(['region', 'locationEstates'], item))
          .value();
          this.estates = this.allEstateLocations;     
          loader.dismiss();   

      });
    });

  }

  itemTapped($event, estate) {
    this.navCtrl.push(EstateHomePage , {estate: estate});
  }

  updateEstates(){
    let queryTextLower = this.queryText.toLowerCase();
    let filteredEstates = [];
    _.forEach(this.allEstateLocations, td => {
      let estates = _.filter(td.locationEstates, t => (<any>t).name.toLowerCase().includes(queryTextLower));
      if (estates.length) {
        filteredEstates.push({ locationName: td.locationName, locationEstates: estates });
      }
    });

    this.estates = filteredEstates;
  }
}
