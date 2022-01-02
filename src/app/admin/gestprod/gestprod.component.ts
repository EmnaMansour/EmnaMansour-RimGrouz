import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-gestprod',
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css']
})
export class GestprodComponent implements OnInit {
nameControl=new FormControl('');
prixControl=new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
