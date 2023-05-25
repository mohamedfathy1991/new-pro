import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userauthoriziation= localStorage.getItem('token')

    isAdmin = localStorage.getItem('username')=="aser"||"admin"
    


  title = 'omar fathy';

  onclick(){
    console.log(this.isAdmin)
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwww')
  }
  onkeyup(){
    console.log(this.title)
  }

}
