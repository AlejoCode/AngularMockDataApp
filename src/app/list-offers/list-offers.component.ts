import { Component, OnInit } from '@angular/core';
import {OffersService} from '../offers.service';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent implements OnInit {

  myData:any = {offers:[]};

  constructor(private offerService: OffersService) { }

  ngOnInit(): void {
    this.offerService.getData().subscribe(e=>{
      this.myData = e;
      console.log(e);
    });
  }

}
