import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrls: ['./pageview.component.css']
})
export class PageviewComponent implements OnInit {

  @Input('pageData') pageData:any=[];
  @Input('surah') surah:any;
  constructor() { }

  ngOnInit(): void {
  }
}
