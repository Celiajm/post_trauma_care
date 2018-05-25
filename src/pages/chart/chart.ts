import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {FormPage} from "../form/form";
import {CalendarPage} from "../calendar/calendar";
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage {
  json : string;


  constructor(public nav: NavController, private storage: Storage,public navParams: NavParams, public http: HTTP) {
    this.nav=nav;
}

loadForm(){
  this.storage.get('info')

}


}
