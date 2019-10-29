import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}<h2>
  <h2>2+2</h2>
  <h2>{{"welcome"+name}}</h2>
  <h3>{{name.length}}</h3>
  <h3>{{siteurl}}</h3>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  public name="Santhosh";
  public siteurl=window.location.href;
  constructor() { }

  ngOnInit() {
  }

}
