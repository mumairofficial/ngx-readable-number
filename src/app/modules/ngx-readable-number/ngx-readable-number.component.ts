import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-readable-number',
  template: `{{num}}`,
  styleUrls: ['./ngx-readable-number.component.css']
})
export class NgxReadableNumberComponent implements OnInit {
  @Input() num: string;

  constructor() {
  }

  ngOnInit() {
    const incomingNumber = this.num;
    this.num = this.nFormatter(Math.abs(parseInt(incomingNumber, 0)), 1);
  }

  nFormatter(num, digits) {
    const si = [
      {value: 1E18, symbol: 'E'},
      {value: 1E15, symbol: 'P'},
      {value: 1E12, symbol: 'T'},
      {value: 1E9, symbol: 'B'},
      {value: 1E6, symbol: 'M'},
      {value: 1E3, symbol: 'K'}
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

    for (let i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
      }
    }
    return num.toFixed(digits).replace(rx, '$1');
  }

}
