import { Component } from '@angular/core';
import { ListAttendancePage } from '../attendance/list/listAttendance';
import { ListTechnicianPage } from '../technician/list/listTechnician';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ListAttendancePage;
  tab2Root: any = ListTechnicianPage;

  constructor() {

  }
}
