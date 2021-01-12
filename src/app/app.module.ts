import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/start.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
