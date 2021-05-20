import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [
  {path:'',redirectTo: 'product',pathMatch:'full'},
  {path: 'products',component:ProductListComponent},
  {path: 'add',component:AddProductComponent},
  {path: 'details/:id',component:ProductDetailsComponent},
  {path: 'update/:productId',component:UpdateProductComponent},
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
