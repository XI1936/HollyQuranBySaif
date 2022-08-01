import { Constants } from './../../utilities/constants';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-bar',
  templateUrl: './audio-bar.component.html',
  styleUrls: ['./audio-bar.component.css']
})
export class AudioBarComponent implements OnInit {

  @Input('surah') surahId:any='';
  track=new Audio();
  currentTime:any;

  constructor() { }

  ngOnInit(): void {
  }

  playPause(){
    let isPaused=this.track.paused;
    let isPlaying= !isPaused;
    const playURL=Constants.Audio_PlAY_URL+this.surahId+'.mp3';
    if(isPaused) {
      this.track.src= playURL;
      this.track.currentTime=this.currentTime || 0 ;
      this.track.play();
    }
    if(isPlaying) {
      this.currentTime = this.track.currentTime;
      this.track.pause();
    } 
    console.log('-----Clicked',this.currentTime);

  }

  ngOnChanges(changes) {
    console.log(changes.surahId);
    (!changes.surahId.firstChange) ? this.currentTime=0  : '' ;
    if( changes.surahId.previousValue && (changes.surahId.previousValue != changes.surahId.currentValue ) ){
      this.track.currentTime= 0 ;
      this.track.pause();
    }
    }
}
