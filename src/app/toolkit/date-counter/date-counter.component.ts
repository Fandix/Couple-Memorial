import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-counter',
  templateUrl: './date-counter.component.html',
  styleUrls: ['./date-counter.component.scss']
})
export class DateCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  DateDiff() { 
    const oDate1 = new Date();
    const oDate2 = new Date('2020/11/14');
    return parseInt(((oDate1.valueOf() - oDate2.valueOf()) / 86400000).toString());
  };
}
