import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class UserSettingsProvider {

  constructor(public storage: Storage, public events: Events) {
  }

  favoriteEstate(estate, locationId, locationName) {
    let item = { estate: estate, locationId: locationId, locationName: locationName };
    this.storage.set(estate.id.toString(), JSON.stringify(item)).then(() => {
      this.events.publish('favorites:changed');
    });
  }

  unfavoriteEstate(estate) {
    this.storage.remove(estate.id.toString());
    this.events.publish('favorites:changed');
  }

  isFavoriteEstate(estateId) : Promise<boolean> {
    return this.storage.get(estateId.toString()).then(value => value ? true : false);
  }

  getAllFavorites() : Promise<any[]> {
    return new Promise(resolve => {
        let results = [];
        this.storage.forEach(data => {
            results.push(JSON.parse(data));
        });

        return resolve(results);
    });
  }
  
}
