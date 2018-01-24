import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstateDetailsPage } from './estate-details';

@NgModule({
  declarations: [
    EstateDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EstateDetailsPage),
  ],
})
export class EstateDetailsPageModule {}
