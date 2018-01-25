import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LocationsPage } from '../pages/locations/locations';
import { EstatesPage } from '../pages/estates/estates';
import { EstateHomePage } from '../pages/estate-home/estate-home';
import { SavedEstatesListPage } from '../pages/saved-estates-list/saved-estates-list';
import { EstateDetailsPage } from '../pages/estate-details/estate-details';
import { EstateMapPage } from '../pages/estate-map/estate-map';
import { EstateSimilarPage } from '../pages/estate-similar/estate-similar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EstatesApiProvider } from '../providers/estates-api';
import { UserSettingsProvider } from '../providers/user-settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LocationsPage,
    EstatesPage,
    EstateHomePage,
    SavedEstatesListPage,
    EstateDetailsPage,
    EstateMapPage,
    EstateSimilarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtLjPSymSciWcuNnvRfBYO5_nv9Cwma6A'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LocationsPage,
    EstatesPage,
    EstateHomePage,
    SavedEstatesListPage,
    EstateDetailsPage,
    EstateMapPage,
    EstateSimilarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EstatesApiProvider,
    UserSettingsProvider
  ]
})
export class AppModule {}
