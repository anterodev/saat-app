import { Component } from '@angular/core';
import {NavController, AlertController, Events} from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
  	public events: Events, public alertCtrl: AlertController) {

  }

login(){
  this.navCtrl.push(TabsPage);
  }

}