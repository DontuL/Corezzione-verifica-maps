import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GoogleMap,MapMarker } from '@angular/google-maps';
import { Observable, observable } from 'rxjs';
import { Buche } from './models/buche.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularClient';
  
  center: google.maps.LatLngLiteral = { lat: 35.71407782901707 ,lng: 139.69876694123647 }
  zoom = 8;
  vetbuca : google.maps.MarkerOptions[];
  obsBuche: Observable<Buche[]>;
  constructor(public http: HttpClient) {
    this.vetbuca = [];
  
  }

  visbuche = (data: Buche[])=>{


    console.log(data);
    this.vetbuca = [];
    for (const iterator of data['buche']){
      let m:  google.maps.MarkerOptions = {
        position: new google.maps.LatLng(iterator.lat, iterator.lng)
      }
      this.vetbuca.push(m)
    }
  }
  ngOnInit(){
    this.obsBuche = this.http.get<Buche[]>("https://5000-lime-sailfish-9mai3awf.ws-eu23.gitpod.io/all")
    this.obsBuche.subscribe(this.visbuche)
  }




}

