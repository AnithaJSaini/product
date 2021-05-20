import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product = new Product();
  submitted= false;
  constructor(private productservice : ProductService,private router : Router) { }
  ngOnInit(): void {
  }

  addProduct(): void{
    this.productservice.addProduct(this.product).subscribe(result =>{
        console.log(result);
        this.product= new Product();
        this.goToProductList();
      }, (error: any)=> console.log(error)
    );
    alert(" Product added");
  }
  goToProductList(){
    this.router.navigate(['/products']);
  }

  onSubmit(){
    this.submitted=true;
    this.addProduct();
  }

  }

