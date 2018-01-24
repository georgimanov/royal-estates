import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstateMapPage } from './estate-map';

@NgModule({
  declarations: [
    EstateMapPage,
  ],
  imports: [
    IonicPageModule.forChild(EstateMapPage),
  ],
})
export class EstateMapPageModule {}
