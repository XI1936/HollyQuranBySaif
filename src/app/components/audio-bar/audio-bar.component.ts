import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-bar',
  templateUrl: './audio-bar.component.html',
  styleUrls: ['./audio-bar.component.css']
})
export class AudioBarComponent implements OnInit {

  @Input('surah') surahId:any='';
  constructor() { }

  ngOnInit(): void {
  }

  playPause(){
    console.log('-----Clicked',this.surahId);
  }
}
