import { Injectable, OnInit ,Pipe} from '@angular/core';
// هستدعي http
import{HttpClient, HttpHeaders}from'@angular/common/http'
import Users from'../model/Users.model'



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
s= localStorage.getItem("token")
  

  constructor(private http:HttpClient) { 

  }
 adduser  (name:string,email:string,password:string){

    const url="http://localhost:3000/";
    const user  = {
       name:name,
       email:email,
       password:password,
     }
    
      return this.http.post(url+'adduser',user,{}).toPromise( )
  
  
    } //end of signup


    login(email:any,password:any){


      let header= new HttpHeaders().set("email",email).set("password",password)
  
      console.log(header)
      return this.http.post('http://localhost:3000/login',{}//القوسين الفاضين دول بيخصو الbody
      ,{headers:header}).toPromise( )
  



    }//end of log in
    

    getusers(){//get all users from backend to ADMIN panel
      
     
       let tokens: any = localStorage.getItem("token")

      let header= new HttpHeaders().set("verfytoken",tokens)
      return this.http.get('http://localhost:3000/users'//القوسين الفاضين دول بيخصو الbody
      ,{headers:header},).toPromise( )
  
  


      
    
      

    }




  }