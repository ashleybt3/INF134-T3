import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent{

  infoWindow: any = [];
  markers = [
    {
      title: "UTC",
      latitude: 33.6493,
      longitude: -117.8396
    },
    {
      title: "Aldrich Park",
      latitude: 33.6460,
      longitude: -117.8426
    }
  ];

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  map: any;

  constructor(private modalctrl: ModalController) { }

  ionViewDidEnter(){
    this.loadMap();
  }

  addMarkersToMap() {
    for (let marker of this.markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
    }
  }

  loadMap(){
    const location = new google.maps.LatLng(33.6460, -117.8426);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap();
    this.map.addListener("click", (mapEvent => {
      console.log(mapEvent);
      this.addMarker(mapEvent);
    }))
  }

  dismissModal(){
    this.modalctrl.dismiss();
  }

  addMarker(marker){
    let x = new google.maps.Marker({
      position: marker.latLng
    });
    x.setMap(this.map);
  }
}