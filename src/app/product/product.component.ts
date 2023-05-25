import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  msg= ""
  
  product:any=[]
  constructor(private pr:ProductService){
    this.pr.getproducts().then(results=>{
      console.log(results)

      this.product=results
    }).catch(err=>{
      console.log("err hapend"+ err.message)
    })


  }

}
