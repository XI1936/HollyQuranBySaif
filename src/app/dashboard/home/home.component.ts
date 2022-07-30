import { Component, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/utilities/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  headerItems:any;
  formContainerData:any;
  pageData:any;
  surahId:any
  pageHeading:any;
  constructor(private appService:AppService,private router:Router) { }

  ngOnInit(): void {
    this.initContaint('chapters');
  }

  initContaint(val){
    this.appService.get(val.toLowerCase()).subscribe(
      (response)=>{
        this.formContainerData=response['juzs'] || response['chapters'] ;
        // console.log(this.formContainerData);
      }
    )    
  }

  navHandler(cardItem){
    // console.log(cardItem.id);
    let url=`quran/verses/imlaei?chapter_number=`+cardItem.id;
    this.appService.get(url).subscribe((result)=>{
      this.pageData=result['verses'];
      this.surahId=cardItem.id;
      // console.log(this.pageData);
      this.pageHeading=cardItem;
    // this.router.navigate(['page']);

  })}
}
