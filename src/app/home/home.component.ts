import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

title="omar"
  
  constructor(){}


  onclick(e:any){
    console.log(e.target)
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwww')
  }
  onkeyup(){
    console.log(this.title)
  }

}
