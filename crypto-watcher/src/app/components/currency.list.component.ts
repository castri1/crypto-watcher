import { Component, Input } from '@angular/core';

@Component({
    selector: 'currency-list',
    templateUrl: './currency.list.component.html',
})
export class CurrencyListComponent {
    @Input() currencies: Array<any>
    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
