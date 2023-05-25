import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators ,FormControl,FormsModule} from '@angular/forms';


import{UsersService} from '../services/users.service'
import { Router } from "@angular/router"


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  adminloginForm: any;
  msg =new FormControl("")  
    constructor(private fb:FormBuilder, private us:UsersService,private rout:Router){

      if (localStorage.getItem('token')==null){
        this.creatform()

     }else{
      localStorage.removeItem('token')
      localStorage.removeItem('username')


      this.rout.navigate(['in'])
 
      window.open("in","_parent")//عشان لما اعمل تسجيل خروج يعمل اعاده تحميل ويحفي كلمه تسجيل خروج

      }

   }

 login(email:any,password:any){
     this.us.login(email,password).then((res:any)=>{
       if(res['token']){
        localStorage.setItem('token',res['token'])
        localStorage.setItem('username',res['userdata'].name)
        this.msg.setValue("user log in")
        if(email=="admin@admin.com"){
          this.rout.navigate(['/admin'])
          window.open("/admin","_parent")//دي عشان لما اعمل تسجيل دخول يخفي كلمه عمل اكونت وتسجيل دخول و يظهر تسجيل الخروج
  

        }else{
          this.rout.navigate(['/home'])
          window.open("/home","_parent")//دي عشان لما اعمل تسجيل دخول يخفي كلمه عمل اكونت وتسجيل دخول و يظهر تسجيل الخروج
  


        }
       

       }else{
        this.msg.setValue("user is incorrect or password") 
       }
      }).catch(err=>{
        this.msg.setValue("errr ocure is : " + err.error.message)
    
    
        
        console.log(err.error.message)
      })
  

      }
 



 creatform(){
  this.adminloginForm=this.fb.group({
   
    email:["",Validators.compose([
      Validators.required,
       Validators.email
    ])],
    password:[null,Validators.compose([
    
      Validators.required,
     
    ])],
      

   


   })} ;//signin form  admin

  }
  