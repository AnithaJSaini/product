import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product : Product;
  productId:string;
  submitted=false;
  constructor(private productservice : ProductService,private route: ActivatedRoute,private router : Router) { }
  ngOnInit(): void {
    this.product=new Product();
    this.productId=this.route.snapshot.params['productId'];
    this.productservice.getProductById(this.productId).
    subscribe(sproduct=>{
        console.log(sproduct);
        this.product=sproduct;
    },error=>console.log(error));
  }

  updateProduct(productId:string): void{
    this.productservice.updateProduct(this.productId,this.product).subscribe(result =>{
        console.log(result);
        this.product= new Product();
        this.goToProductList();
      }, (error: any)=> console.log(error)
    );
    alert(" Product updated");
  }
  goToProductList(){
    this.router.navigate(['/products']);
  }

  onSubmit(){
    this.submitted=true;
    this.updateProduct(this.productId);
  }

}
