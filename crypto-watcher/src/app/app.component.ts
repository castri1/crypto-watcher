import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { getLocaleDayNames } from '@angular/common/src/i18n/locale_data_api';
import { element } from 'protractor';

interface Data {
  latestValue: Number;
}

interface PairData {
  data: Data;
  name: String;
  moved: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currencies: Array<PairData> = [];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list("/crypto").valueChanges().subscribe((data: Array<PairData>) => this.handleIncomingData(data));
  }

  handleIncomingData(data: Array<PairData>) {
    this.currencies = data;
  }

  onSave(currency: any) {
    console.log("From app component");
    console.log(currency);
    this.db.database.ref(`/currencies`).push(currency);
  }

  ngOnDestroy() {

  }
}
