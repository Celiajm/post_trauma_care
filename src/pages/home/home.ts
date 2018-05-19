import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormPage} from '../form/form';
import {Storage} from "@ionic/storage";
import {CalendarPage} from '../calendar/calendar'
import {ChartPage} from '../chart/chart'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  json : string;
  allservices = [
    [{label:'New Record', col8:true}, {label:'My Chart'}],
    [{label:'Rx Schedule'}, {label:'Calender'}],
    [{label:'Active Orders'}, {label:'Symptom Tracker'}]
  ];

  // static get parameters() {
  //   return [[NavController]];
  // }

  constructor(public nav: NavController, private storage: Storage,public navParams: NavParams) {
    this.nav=nav;
    this.json = navParams.get('data')
  }

  loadForm(){
    this.storage.get('info').then(() => {
      console.log(this.json);
  });
  }

  openFormPage() {
    this.nav.push(FormPage)
  }

  openChartPage() {
    this.nav.push(ChartPage)
  }
  openCalendarPage() {
    this.nav.push(CalendarPage)
  }


}
