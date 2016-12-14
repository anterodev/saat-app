import { Component } from '@angular/core';
import { TechnicianPage } from '../show/technician';
import { NewTechnicianPage } from '../new/newTechnician'
import {NavController, AlertController, Events} from 'ionic-angular';

@Component({
  selector: 'page-technician',
  templateUrl: 'listTechnician.html'
})
export class ListTechnicianPage {

  constructor(public navCtrl: NavController, 
  	public events: Events, public alertCtrl: AlertController) {

  }

  itemTapped(){
  	this.navCtrl.push(TechnicianPage);
  }

addItem(){
  	this.navCtrl.push(NewTechnicianPage);
}

}
