import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstateDetailsPage } from '../../pages/estate-details/estate-details';
import { EstateMapPage } from '../../pages/estate-map/estate-map';
import { EstateSimilarPage } from '../../pages/estate-similar/estate-similar';

@IonicPage()
@Component({
  selector: 'page-estate-home',
  templateUrl: 'estate-home.html',
})
export class EstateHomePage {
  estate: any = {}; 
  estateDetailsTab: any;
  estateMapTab: any;
  estateSimilarTab: any;
  locationId: any;
  locationName: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.estateSimilarTab = EstateSimilarPage;
      this.estateDetailsTab = EstateDetailsPage;
      this.estateMapTab = EstateMapPage;

      this.estate = this.navParams.get('estate');
      this.locationId = this.navParams.get('locationId');
      this.locationName = this.navParams.get('locationName');
  }

  goHome() {
    this.navCtrl.popToRoot();
  }
}
