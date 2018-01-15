import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedEstatesListPage } from './saved-estates-list';

@NgModule({
  declarations: [
    SavedEstatesListPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedEstatesListPage),
  ],
})
export class SavedEstatesListPageModule {}
