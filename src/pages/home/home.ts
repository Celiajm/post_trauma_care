import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormPage} from '../form/form'
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  json : string;

  static get parameters() {
    return [[NavController]];
  }

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
}
