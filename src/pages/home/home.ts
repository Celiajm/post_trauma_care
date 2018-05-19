import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormPage} from '../form/form'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  static get parameters() {
    return [[NavController]];
  }

  constructor(public nav: NavController) {
    this.nav=nav
  }

  openFormPage() {
    this.nav.push(FormPage)
  }
}
