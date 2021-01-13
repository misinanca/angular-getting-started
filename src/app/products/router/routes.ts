import { ProductDetailGuard } from "../guards/product-detail.guard";
import { ProductDetailComponent } from "../components/product-details/product-detail.component";
import { ProductListComponent } from "../components/product-list/product-list.component";

export let routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
];