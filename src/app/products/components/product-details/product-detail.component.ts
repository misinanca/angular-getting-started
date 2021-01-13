import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../../product';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product";
  product: IProduct;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product;
        this.pageTitle += ` ${product.productId}`;
      },
			error: (error) => this.errorMessage = error,
    })
  };
  
  onBack(): void {
    this.router.navigate(['/products']);
  };
}
