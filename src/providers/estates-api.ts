import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class EstatesApiProvider {
    private baseUrl = 'https://royal-estates-c3d59.firebaseio.com/';

    currentLocation: any = {};
    private locationData = {};

    constructor(public http: HttpClient){
    }

    getLocations(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/locations.json`)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getLocationData(locationId, forceRefresh: boolean = false) : Observable<any> {
        if (!forceRefresh && this.locationData[locationId]) {
            this.currentLocation = this.locationData[locationId];
            console.log('**no need to make HTTP call, just return the data'); 

            return Observable.of(this.currentLocation);
        }

        console.log('**about to make HTTP call');
        
        return this.http.get(`${this.baseUrl}/locations-data/${locationId}.json`)
            .map(response => {
                this.locationData[locationId] = response;
                this.currentLocation = this.locationData[locationId];
            
                return this.currentLocation;
            });
    }

    getCurrentLocation(){
        return this.currentLocation;
    }

    refreshCurrentLocation() : Observable<any>{
        return this.getLocationData(this.currentLocation.location.id, true); 
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err);

        return Observable.throw(err);
    }
}