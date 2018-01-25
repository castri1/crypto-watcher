import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'new-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
    @Output() save = new EventEmitter<any>();
    newCurrency: any = {
        currencyName: '',
        pairName: ''
    };

    constructor() { }

    saveData() {
        this.save.emit(this.newCurrency);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
