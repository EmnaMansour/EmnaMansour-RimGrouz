import { Component, OnInit } from '@angular/core';
import { shoes } from 'src/app/shared/mock-data/catalogue-produits';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produits = shoes ;

  constructor() { }

  ngOnInit(): void {
  }
  onDetail(p :String){
    alert(p) ;

  }

}
