import { Component } from '@angular/core';
import { AttendancePage } from '../show/attendance';
import { NewAttendancePage } from '../new/newAttendance';
import {NavController, AlertController, Events} from 'ionic-angular';

@Component({
  selector: 'page-listAttendance',
  templateUrl: 'listAttendance.html'
})
export class ListAttendancePage {

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
