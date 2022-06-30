import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @Input('formData') formData;
  @Output() navHandler = new EventEmitter();
  constructor() { }
  Arr:any;
  display:boolean=false;
  ngOnInit(): void {
    this.Arr= [ ... Array(40)].fill('1').map((a,i)=> {
      i++;
      return { value: ""+i, label: ""+i, disabled: false };
      });
      console.log("-------",this.Arr)
  }
  showSideBar(){
    this.display=true;
  }
  getCardDetails(id){
    this.navHandler.emit(id);
    }
}
