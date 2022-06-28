import { Component, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/utilities/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  headerItems:any;
  formContainerData:any;
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.headerItems=[{"name":"Chapters","value":"chapters"},{"name":"Juzs","value":"juzs"}];
  }

  initContaint(val){
    this.appService.get(val.toLowerCase()).subscribe(
      (response)=>{
        this.formContainerData=response['juzs'] || response['chapters'] ;
        console.log(this.formContainerData);
      }
    )    
  }
}
