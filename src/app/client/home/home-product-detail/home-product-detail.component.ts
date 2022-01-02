import { Component, OnInit } from '@angular/core';
import { jewwllery } from 'src/app/shared/mock-data/catalogue-produits';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
export class HomeProductDetailComponent implements OnInit {
  produits = jewwllery ;

  constructor() { }

  ngOnInit(): void {
  }
  onDetail(p :String){
    alert(p) ;

  }

}
