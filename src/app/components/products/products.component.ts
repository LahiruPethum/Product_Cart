import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList:any;

  constructor(private api: ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((element:any) => {
        Object.assign(element,{quantity:1,total:element.price})
      });
    })
  }

  addToCart(item:any){
    this.cart.addtoCart(item);
  }

}