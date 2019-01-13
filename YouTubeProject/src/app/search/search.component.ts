import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { YoutubserviceService } from '../youtubservice.service';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public data = [];
  public showChilren: boolean = false;
  // public enableSearch: boolean = true;
  private searchTerms = new EventEmitter();
  queryField: FormControl = new FormControl();
  constructor(private interservice: YoutubserviceService) { }

  ngOnInit() {
    
    this.showChilren = false;
    console.log( this.showChilren )
    this.queryField.valueChanges.subscribe((queryField) => this.interservice.search(queryField)
      .subscribe(response => {
        this.data = response;
      }));

      console.log("gotoDetails", this.showChilren)
  }
  gotoDetail(obj1: any) {
    this.showChilren = true;
    console.log( this.showChilren );
    this.interservice.valueChange.next(obj1);
    console.log("gotoDetails", this.showChilren)
    console.log("gotoDetails", obj1)
  }

}
