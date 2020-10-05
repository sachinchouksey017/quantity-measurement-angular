import { Component, OnInit } from '@angular/core';
import { QuantityService } from "../../services/quantity-service/quantity.service";
@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.scss']
})
export class ChooseTypeComponent implements OnInit {

  constructor(public quantityService: QuantityService) { }
  selected = 'length'
  ngOnInit() {
    // this.convert()
  }

  convert() {
    this.quantityService.convert({}).subscribe(data => {
      console.log("data after success", data);

    }, err => {
      console.log("err after", err);

    })
  }
  select(type: string) {
    this.selected = type;
  }

}
