import { WelcomeComponent } from "../home/welcome.component";
import { ProductDetailGuard } from "../products/guards/product-detail.guard";
import { ProductDetailComponent } from "../products/product-detail.component";
import { ProductListComponent } from "../products/product-list.component";

export let routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];