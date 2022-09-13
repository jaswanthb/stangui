import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-questions',
  templateUrl: './profile-questions.component.html',
  styleUrls: ['./profile-questions.component.css']
})
export class ProfileQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  datatables : data[] = [

    { questionName : 'Age', questionText : 'What is your Age?	', questionTypeName : 'Drop Down',  IsActive : 'Yes',  Actions : 'click'},
    
    { questionName : 'CA Regions', questionText : '		CA Regions', questionTypeName : 'Single Select',  IsActive : 'Yes',  Actions : 'click'},
    
      ]
      	
      options = [
        {id: 1, name: 'All'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
      ]
      selectedValue = 1
      					 
      userName:string = "Basic Demographic Profile";
    }
    class data {  
      questionName! : string;  
      questionText! : string;  
      questionTypeName! : string;  
      IsActive! : string;  
   
      Actions! : string;
    }  
