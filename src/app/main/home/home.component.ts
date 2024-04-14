import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ButtonModule,
    NgFor,
    NgIf,


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  products :any[]= [];

  constructor(
    private _productService: ProductService,
    private _router: Router
  ){}
  ngOnInit(): void {
    this._productService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }

}
