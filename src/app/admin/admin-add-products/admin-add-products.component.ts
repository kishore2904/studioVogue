import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-products',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    NgFor,
    NgIf,
    ReactiveFormsModule,
    InputTextareaModule,
    RadioButtonModule

  ],
  providers: [],
  templateUrl: './admin-add-products.component.html',
  styleUrl: './admin-add-products.component.scss'
})
export class AdminAddProductsComponent implements OnInit {

  addProductForm!: FormGroup;
  ingredient!: string;
  constructor(
    private formBuilder: FormBuilder,
    private _productService: ProductService,
    private _router: Router,
    ) {

  }
  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      productNameControl: ['', Validators.required],
      productPriceControl: ['', Validators.required],
      productDiscountControl: ['', Validators.required],
      productDescriptionControl: ['', Validators.required],
      inStockControl: [],
    })

  }

  addProduct() {
    
    
    if (this.addProductForm.valid) {
      const form = {
        productName: this.addProductForm.get('productNameControl')?.value,
        productDescription: this.addProductForm.get('productDescriptionControl')?.value,
        productPrice: this.addProductForm.get('productPriceControl')?.value,
        productDiscount: this.addProductForm.get('productDiscountControl')?.value,
        inStock: this.addProductForm.get('inStockControl')?.value,
      }
  this._productService.createProduct(form);
  this._router.navigate(['admin-panel']);

      
    }
  }
}
