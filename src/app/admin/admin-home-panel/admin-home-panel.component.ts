import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-home-panel',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    NgFor

  ],
  templateUrl: './admin-home-panel.component.html',
  styleUrl: './admin-home-panel.component.scss'
})
export class AdminHomePanelComponent implements OnInit {
  products :any[]= [];
  responsiveOptions: any[] | undefined;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ){}
  ngOnInit(): void {
    this._productService.getProducts().subscribe((data)=>{
      this.products = data;
      console.log('Admin Home Panel Data : ', this.products);
    })

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    
  }

  navigateToAddProduct(){
    this._router.navigate(['/admin-add-products']);

  }



}
