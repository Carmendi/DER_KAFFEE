import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailshomePage } from '../detailshome/detailshome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
		private _dataCards: any;
		private _detailshome: any;
	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this._detailshome = DetailshomePage;

  		this._dataCards = [
  				{ title: "Enjoying a Coffee", image: "adult-attractive-background.png", descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
  				{ title: "Sharing Moments",   image: "aroma-art-beverage.png", 		    descripcion: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non."},
  				{ title: "Happiness",         image: "art-blur-cappuccino.png", 		descripcion: "Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
  				{ title: "Tasting a Coffee",  image: "attractive-bar-barista.png", 	    descripcion: "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
  				{ title: "Coffe & Work",      image: "beverage-coffee-computer.png", 	descripcion: "Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non."}
  		];
  			
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loadDetails( currentInfo) {
  		this.navCtrl.push( this._detailshome, { details: currentInfo } );
  }

}
