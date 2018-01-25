import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var window: any;

@IonicPage()
@Component({
  selector: 'page-estate-map',
  templateUrl: 'estate-map.html',
})
export class EstateMapPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
   this.loadMap();
  }

  // ionViewDidLoad() {
  //   let estate = this.navParams.get('estate');

  //   console.log(estate);
  //   this.map = {
  //     lat: estate.latitude,
  //     lng: estate.longitude,
  //     zoom: 12,
  //     markerLabel: estate.address 
  //   };

  //   console.log(this.map);
  // }

  // getDirections() { 
  //   window.location = `geo:${this.map.lat},${this.map.lng};u=35`; 
  // }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: 43.0741904
        },
        zoom: 18,
        tilt: 30
      }
    };

    

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: 43.0741904
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

          console.log(this.map);
      });
  }
}
