import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-add-component',
  templateUrl: './product-add-component.component.html',
  styleUrls: ['./product-add-component.component.css']
})
export class ProductAddComponentComponent implements OnInit {
 
ProductAddForm ! : FormGroup
  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.ProductAddForm = this.fb.group({
      nom:[' '],
      prix: [' '],
      description:[' '],
      image :[' '] ,
      id :[' ']
   
      

    });
  }
onAjouter(){
  alert(JSON.stringify(this.ProductAddForm.value));
}
}
