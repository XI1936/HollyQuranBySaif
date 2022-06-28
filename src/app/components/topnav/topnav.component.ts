import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  
  @Input('headerItems') headerItems:any;
  @Output() actionH = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.actionH.emit('chapters');
  }

  actionHandler(value:any) {
    const tabcode= value.originalEvent.target.textContent ;
    this.actionH.emit(tabcode);
  }

}
