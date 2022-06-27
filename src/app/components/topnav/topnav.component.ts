import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  
  @Input('headerItems') headerItems:any;
  constructor() { }

  ngOnInit(): void {
  }

}
