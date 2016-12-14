import { Component } from '@angular/core';
import { AttendancePage } from '../attendance/attendance';
import { NewAttendancePage } from '../attendance/newAttendance';
import {NavController, AlertController, Events} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
  	public events: Events, public alertCtrl: AlertController) {

  }

  itemTapped(){
  	this.navCtrl.push(AttendancePage);
  }

  addItem(){
  	this.navCtrl.push(NewAttendancePage);
  }

}
