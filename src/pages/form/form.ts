import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from '../home/home';
import {ChartPage} from '../chart/chart'

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  file;
  user = {
    Diagnosis: '',
    Care: '',
    PPD: '',
    PPH: '',
    Date:'',
    Type:'',
    Location:'',
  };

  constructor(private storage: Storage, public nav: NavController) {

  }

  closeFormPage() {
    this.nav.push(HomePage)
  }

  writeFile(){
    let array = [];
    let json = {"Diagnosis": this.user.Diagnosis, "Care": this.user.Care, "PPD": this.user.PPD, "PPH": this.user.PPH }
    array.push(this.user);
    this.storage.set('info',json).then(() => {
      this.storage.get('info').then(() => {
        console.log(json);
      });
    });
    this.nav.push(ChartPage, {
      data:json
    });
  }
}
