import { Component } from '@angular/core';

import { MedicationPage } from '../medication/medication';
import { ChartPage } from '../chart/chart';
import { HomePage } from '../home/home';
import { CalendarPage } from '../calendar/calendar';
import { WoundPage } from '../wound/wound';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChartPage;
  tab3Root = MedicationPage;
  tab4Root = CalendarPage;
  tab5Root = WoundPage;

  constructor() {

  }
}
