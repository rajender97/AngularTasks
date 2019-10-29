import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public message="";
  @Output() public childEvent = new EventEmitter();
  
  parentMethod(value){
    this.message=value;
    console.log(value);
    this.childEvent.emit(value);

  }

  constructor() { }

  ngOnInit() {
  }

}
