import { HttpEventType } from '@angular/common/http';
import { Component,OnInit,NgModule } from '@angular/core';
import { FormGroup,FormBuilder, Validators ,FormControl,FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import{UsersService} from '../services/users.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  SignupForm: any;
  //  ممكن اعمل اوبجكت او استخدم private us:userservice
  // لاحظ انه اوبجكت عطي خطا لما كتبتدداخل servive class in service file private:http :httpclient
  // uss= new UsersService();
   
  msg =new FormControl("")
  
  
  constructor(private fb:FormBuilder,private us:UsersService ){
    
    
    this.creatform()

  }
adduser(name:string,email:string,password:string){

  this.us.adduser(name,email,password).then((res:any)=>{
    if (res['succes']=true){
      localStorage.setItem('token',res['token'])
      this.msg.setValue("you are signup   " )
      
    
    
         }else{ this.msg.setValue("you are not  sign up ......... " )}


   

    
  
  
  }).catch(err=>{
    this.msg.setValue("errr ocure is : " + err.error.message )


   
  })
  // this.uss.adduser(name,email,password)

 
 
 
}

  
  creatform(){
    this.SignupForm=this.fb.group({
      name:["",Validators.required],
      email:["",Validators.compose([
        Validators.required,
         Validators.email
      ])],
      password:[null,Validators.compose([
      
        Validators.required,
        Validators.minLength(5)

      ])],
      confirmpassword:[null,Validators.compose([
      
        Validators.required,
        

      ])],
      phone: new FormControl('')


     }) ;//signup form validation
   }
   

  ngOnInit():void{}

}
