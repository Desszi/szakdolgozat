import { Component, OnInit } from '@angular/core';
import { Product } from 'app/model/product';
import { ConfigService, ITableFields } from 'app/service/config.service';
import { ProductService } from 'app/service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  tableFields: ITableFields[] = this.config.productFields;
  list$: Observable<Product[]> = this.productService.getAll();
  
  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
