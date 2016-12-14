import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListTechnicianPage } from '../pages/technician/list/listTechnician';
import { TechnicianPage } from '../pages/technician/show/technician';
import { NewTechnicianPage } from '../pages/technician/new/newTechnician';
import { AttendancePage } from '../pages/attendance/show/attendance';
import { NewAttendancePage } from '../pages/attendance/new/newAttendance';
import { ListAttendancePage } from '../pages/attendance/list/listAttendance';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/accounts/login/login';

@NgModule({
  declarations: [
    MyApp,
    ListTechnicianPage,
    TechnicianPage,
    NewTechnicianPage,
    TabsPage,
    AttendancePage,
    NewAttendancePage,
    ListAttendancePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListTechnicianPage,
    TechnicianPage,
    NewTechnicianPage,
    TabsPage,
    AttendancePage,
    NewAttendancePage,
    ListAttendancePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
