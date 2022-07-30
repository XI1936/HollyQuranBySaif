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
  filteredformData:any;
  searchPlaceHolder='search surah';
  display:boolean=false;
  ngOnInit(): void {
    this.Arr= [ ... Array(40)].fill('1').map((a,i)=> {
      i++;
      return { value: ""+i, label: ""+i, disabled: false };
      });
      // console.log("-------",this.Arr)
  }
  showSideBar(){
    this.display=true;
    this.filteredformData=this.formData;
  }
  getCardDetails(id){
    this.navHandler.emit(id);
    this.display=false;
  }

  onSearch(value) {
    const formDataCopy = [...this.formData];
    this.filteredformData = formDataCopy.filter((cardItem) => {
      return cardItem.name_simple.replace(/-/g, '').toLowerCase().includes(value.replace(/-/g, '').toLowerCase()) || cardItem.translated_name['name'].toLowerCase().includes(value.replace(/-/g, '').toLowerCase());
    })
    // console.log(this.filteredformData);
  }
}
