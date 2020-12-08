import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailscoffeepotsPage } from '../detailscoffeepots/detailscoffeepots';


@Component({
  selector: 'page-coffee-pots',
  templateUrl: 'coffee-pots.html',
})
export class CoffeePotsPage {
		private _dataCards: any;
    private _detailscoffeepots: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this._detailscoffeepots = DetailscoffeepotsPage;

  		this._dataCards = [ 
  				{ title: "Cafeteria Chapultepec", image: "cafeteria1.png", direccion: "Av. Chapultepec 318 Roma Nte. Cuauhtémoc 06700 Ciudad de México,  Telefono: 5520158014", ubicacion: "mapa1.png" },
  				{ title: "Cafeteria Cuahutemoc", image: "cafeteria2.png", direccion: "Jalapa, Del. Cuauhtémoc 119, Roma Nte, 06700 Ciudad de México, CDMX, Telefono: 5515806395", ubicacion: "mapa2.png"},
  				{ title: "Cafeteria Satelite", image: "cafeteria3.png", direccion: "Luis Cabrera 122, Ciudad Satélite, Naucalpan de Juárez, Estado de México, Telefono: 5550824572", ubicacion: "mapa3.png"},
  				{ title: "Cafeteria Condesa", image: "cafeteria4.png", direccion: "Juan de la Barrera 101, Colonia Condesa, Ciudad de México, CDMX, Telefono: 5560524193", ubicacion: "mapa4.png"},
  				{ title: "Cafeteria Perisur", image: "cafeteria5.png", direccion: "Cuesta 11, Insurgentes Cuicuilco, Ciudad de México, CDMX, Telefono: 5536425841", ubicacion: "mapa5.png"}
  		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoffeePotsPage');
  }

  loadDetails (currentInfo ) {
      this.navCtrl.push( this._detailscoffeepots, { details: currentInfo });

  }

}
