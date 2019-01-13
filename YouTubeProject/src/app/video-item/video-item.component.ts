import { Component, OnInit, Input } from '@angular/core';
import { YoutubserviceService } from '../youtubservice.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  // @Input() vedioItem:any;
  // public recieveDataInVideoItem:any;
  //   @Input() showChilren: boolean;
  constructor() { 
    // console.log("vedioItem",this.vedioItem)
  }

  ngOnInit() {
   
  }
// sendData(obj){
// //   this.interserveice.valueChange.subscribe(obj=>{this.recieveDataInVideoItem,console.log("vedioItem",this.recieveDataInVideoItem)});
// //   console.log("vedio Item",this.recieveDataInVideoItem)
// }

}
