import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CATALOGUE } from 'src/app/shared/mock-data/catalogue-produits';
import { Produit } from 'src/app/shared/models/produit';


@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
    title = "" ;
    produits =CATALOGUE ;
    
    

  constructor(private productService:ProductService) { }
getProducts():void{
  this.produits=this.productService.getProducts();
}
  ngOnInit(): void {
    this.getProducts();
    
  }
  onDetail(p :String){
    alert(p) ;

  }

}
