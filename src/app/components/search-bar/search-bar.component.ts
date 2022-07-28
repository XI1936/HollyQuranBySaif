import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input('placeHolder') placeHolder:any;
  @Output() searchKey:any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(value){
    this.searchKey.emit(value);
  }
}
