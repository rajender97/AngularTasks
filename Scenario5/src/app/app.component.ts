import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public message="";
parentMethod(value){
  this.message=value;
  console.log(value);
}
}
