import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from'@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 


  }
  getproducts(){//get all users from backend to ADMIN panel
      
     
    let tokens: any = localStorage.getItem("token")

   let header= new HttpHeaders().set("verfytoken",tokens)
   return this.http.get('http://localhost:3000/product'//القوسين الفاضين دول بيخصو الbody
   ,{headers:header},).toPromise( )

    }

  
}