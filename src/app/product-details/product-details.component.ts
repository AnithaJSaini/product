import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products:Product[];
  productId:string;
  product:Product;
  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.product=new Product();
    this.productId=this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).
    subscribe(sproduct=>{
        console.log(sproduct);
        this.product=sproduct;
    },error=>console.log(error));

  }
  goToProductList(){
    this.router.navigateByUrl('products');
  }

  updateProduct(productId:string){
    this.router.navigateByUrl('update/'+productId)
  }


 reloadProductdata(){
  this.productService.getProducts().subscribe(
    products=>{
      this.products=products;
    }
  );
}
 deleteProduct(productId:string){
  this.productService.deleteProduct(productId).subscribe(
    result=>{
    },
    error=>console.log(error)
  );
  alert("Product Deleted successfuly");
  this.router.navigate(['products']);
}
}



