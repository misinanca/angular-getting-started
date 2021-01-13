import { WelcomeComponent } from "../home/welcome.component";
import { ProductDetailGuard } from "../products/guards/product-detail.guard";
import { ProductDetailComponent } from "../products/components/product-details/product-detail.component";
import { ProductListComponent } from "../products/components/product-list/product-list.component";

export let routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];