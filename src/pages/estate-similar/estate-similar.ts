import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EstatesApiProvider } from '../../providers/estates-api';
import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-estate-similar',
  templateUrl: 'estate-similar.html',
})
export class EstateSimilarPage {
  regionFilter = 'all';
  allEstates: any[];
  allEstateLocations: any = [];
  dataEstateEstates: any = [];
  estates: any[];
  estate: any = {};
  locationId: any;
  location: any = {};
  locationName: string;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public estatesApi: EstatesApiProvider, public loadingController: LoadingController) {
    this.estate = this.navParams.get('estate');
    this.locationId = this.navParams.get('locationId');
    this.locationName = this.navParams.get('locationName');
    this.regionFilter = 'all';
  }

  ionViewDidLoad() {
          let loader = this.loadingController.create({
            content: 'Getting data...'
          });
          loader.present().then(() => {
            this.estatesApi
            .getLocationData(this.locationId)
            .subscribe(data => {
              this.allEstates = data.estates;
              this.allEstateLocations =
                _.chain(data.estates)
                .groupBy('region')
                .toPairs()
                .map(item => _.zipObject(['region', 'locationEstates'], item))
                .value();
                this.dataEstateEstates = this.allEstateLocations;     
                loader.dismiss();   
            });
          });

      this.filterRegion(); 
  }

  filterRegion(){
    if(this.regionFilter === 'all'){
      this.estates = this.allEstates;
    } else {
      this.estates = _.filter(this.allEstates, s => s.region === this.estate.region);
    }

    console.log("Filter result:");
    console.log(this.estates);
  }
}
