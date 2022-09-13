import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileeditquestion',
  templateUrl: './profileeditquestion.component.html',
  styleUrls: ['./profileeditquestion.component.css']
})
export class ProfileeditquestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public model = {
    name: 'Hardik',
    description: '<p> You are invited to participate in a new Vehicle Goods Study! Surveys often fill quickly so participate now to maximize your chance of qualifying. </p>'
  };



  content = "";
  config = {
    // extraPlugins: "autogrow",
    // resize_enabled: false,
    // autoGrow_maxHeight: 200,
    // autoGrow_maxWidth: 200,
    // removePlugins: "resize"
  }; 
  ckeditorContent: any;

  options = [
    {id: 1, name: 'All'},
    {id: 2, name: 'two'},
    {id: 3, name: 'three'},
  ]
  selectedValue = 1

}
