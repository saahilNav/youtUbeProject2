import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YoutubserviceService } from '../youtubservice.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public value: any;
  @Input() vedioList: any;
   @Input() showChilren: boolean;
  // @Output() public childData =new EventEmitter();
 
  constructor(private intervice: YoutubserviceService) {
    // console.log("vedioList", this.vedioList)
  }

  ngOnInit() {
    console.log("vedioList", this.vedioList)
    // console.log("showChilren", this.showChilren)
  }
  // recieveDat(obj) {
  //   this.value = obj;
  //   console.log("obj", this.value)
  // }

  datToDetailComponent(obj:any){
  //  this.childData.emit(obj);
  console.log("child data in vedolist",obj)
  this.intervice.missionAnnouncedSource.next(obj);
  console.log(this.intervice.missionAnnouncedSource.next(obj));
  }

}
