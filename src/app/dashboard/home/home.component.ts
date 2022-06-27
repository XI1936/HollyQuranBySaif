import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headerItems:any;
  constructor() { }

  ngOnInit(): void {
    this.headerItems=["Header1","Header3"];
  }

}
