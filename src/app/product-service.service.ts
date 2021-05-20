import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product    } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http:HttpClient) { }
  privatebaseurl="http://localhost:8081/product";
  /*getAllProduct():Observable<any>{
    return this.http.get("http://localhost:8081/product/all");
  }*/
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8081/product/all");
    //return this.http.get<Product[]>("http://localhost:8058/product1/all");
  }
  getProductById(productId:string):Observable<any>{
    return this.http.get('http://localhost:8081/product/'+productId);
    //return this.http.get('http://localhost:8058/product1/'+productId);
  }
  addProduct(product:Product): Observable<any>{
    return this.http.post('http://localhost:8081/product/',product);
    //return this.http.post('http://localhost:8058/product1/',product);
  }
  updateProduct(productId: string,value:Product):Observable<object>{
    return this.http.put('http://localhost:8081/product/update/'+productId,value);
    //return this.http.put('http://localhost:8058/product1/update/'+productId,value);
  }
  deleteProduct(productId:string):Observable<any>{
      return this.http.delete("http://localhost:8081/product/"+productId);
      //return this.http.delete("http://localhost:8058/product1/"+productId);
  }
  
}