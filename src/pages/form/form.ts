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
    Date: '',
    Type: '',
    Location: '',
  };

  searchQuery: string = '';
  items: string[];

  constructor(private storage: Storage, public nav: NavController) {

  }

  initializeItems() {
    this.items = [
      'Ciprofloxacin',
      'Levofloxacin',
      'Penicillin',
      'Oxycodone',
      'Ampicillin',
      'Clindamycin',
      'Azithromycin',
      'Doxycyclin',
      'Rifampin',
    ];
  }

    getItems(ev :any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) == 0);
        })
        this.items = this.items.sort()
      }
    }


    writeFile()
    {
      let array = [];
      let json = {"Diagnosis": this.user.Diagnosis, "Care": this.user.Care, "PPD": this.user.PPD, "PPH": this.user.PPH}
      array.push(this.user);
      this.storage.set('info', json).then(() => {
        this.storage.get('info').then(() => {
          console.log(json);
        });
      });
      var theJSON = JSON.stringify(json);
      var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);

    }
}
