import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testproject',
  templateUrl: './testproject.component.html',
  styleUrls: ['./testproject.component.css']
})
export class TestprojectComponent implements OnInit {

  constructor() { }

  div1:boolean=true;
  div2:boolean=false;
  div3:boolean=false;
  div4:boolean=false;

  // div1Function(){
  //     this.div1=true;
  //     // this.div2=false;
  //     // this.div3=false
  // }

  div2Function(){ 
      this.div2=true;
      this.div1=false;
      this.div3=false
  }

  div3Function(){
      this.div3=true;
      this.div2=false;
      this.div1=false
  }

  div4Function(){
    this.div4=true;
    this.div3=false;
    this.div2=false;
    this.div1=false
}

  ngOnInit(): void {
  }
  options = [
    {id: 1, name: 'USA'},
    {id: 2, name: 'AUS'},
    {id: 3, name: 'IND'},
  ]
  selectedValue = 1
}
