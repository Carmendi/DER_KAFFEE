import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detailscoffeepots',
  templateUrl: 'detailscoffeepots.html',
})
export class DetailscoffeepotsPage {
		private _currentDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this._currentDetails = navParams.data.details;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailscoffeepotsPage');
  }

}
