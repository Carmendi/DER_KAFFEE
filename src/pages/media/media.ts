import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsmediaPage } from '../detailsmedia/detailsmedia';


@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {
		private _dataCards: any;
    private _detailsmedia: any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this._detailsmedia = DetailsmediaPage;
       
  this._dataCards = [
  				{ poster: "CoffeeBeans-poster.png", title: "The best Coffee", video: "CoffeeBeans.mp4",     descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."},
  				{ poster: "CoffeeComputer-poster.png", title: "Starting the day with Coffee",   video: "CoffeeComputer.mp4", 	descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."},
  				{ poster: "CoffeeCoup-poster.png", title: "Enjoy your Coffee", video: "CoffeeCoup.mp4", 		descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."},
  				{ poster: "CoffeeMachine-poster.png", title: "Choose your Coffee",  video: "CoffeeMachine.mp4", 	descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."},
  				{ poster: "CoffeeMorning-poster.png", title: "The Coffee of your preference",      video: "CoffeeMorning.mp4", 	descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."}
  		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');  
  }

  loadDetails( currentInfo) {
      this.navCtrl.push( this._detailsmedia, { details: currentInfo } );
  }
 
}
