import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent {

  msg =""

  Users:any

  constructor(private us:UsersService){
    console.log("getuser")
    this.us.getusers().then(user=>{

      this.Users=user
          console.log(user)
    }).catch((err)=>{
      console.log("error ocurd")
      this.msg="there is no data "
      
    })

  }





}
