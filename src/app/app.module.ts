import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';


import { ChartPage } from '../pages/chart/chart';
import { CalendarPage } from '../pages/calendar/calendar';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MedicationPage} from '../pages/medication/medication';
import { WoundPage} from '../pages/wound/wound';
import { FormPage } from '../pages/form/form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ChartPage,
    CalendarPage,
    MedicationPage,
    WoundPage,
    FormPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChartPage,
    CalendarPage,
    MedicationPage,
    WoundPage,
    HomePage,
    TabsPage,
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
