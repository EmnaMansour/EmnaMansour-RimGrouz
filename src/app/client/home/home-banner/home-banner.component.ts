import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/shared/mock-data/catalogue-produits';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  produits = Clothes ;

  constructor() { }

  ngOnInit(): void {
  }
  onDetail(p :String){
    alert(p) ;

  }

}
