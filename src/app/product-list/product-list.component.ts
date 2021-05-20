import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  productId:string;

  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadProductdata();
  }
  productDetails(productId:string){
    this.router.navigate(['details',productId])
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
    this.reloadProductdata();
  }
}
