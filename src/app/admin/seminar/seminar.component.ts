import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'seminar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./seminar.scss')],
  template: require('./seminar.html')
})
export class seminarAdmin {

  constructor() {
  }

}