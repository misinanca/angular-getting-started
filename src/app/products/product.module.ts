import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-details/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/pipes/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { routes } from './router/routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }
