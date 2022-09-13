import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitinvoice',
  templateUrl: './submitinvoice.component.html',
  styleUrls: ['./submitinvoice.component.css']
})
export class SubmitinvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options = [
    {id: 1, name: 'All'},
    {id: 2, name: 'two'},
    {id: 3, name: 'three'},
  ]
  selectedValue = 1
  
  datatables : data[] = [

    { FirstName : 'Adam', LastName : 'Stephenson	', EmailAddress : 'adam@precisionsample.com',  CreatedDate : '01/03/2018', LastLoginDate:'May 28 2021 3:29PM', Status : 'Active',  Count : 3554 , Actions : 'click'},
    
  
      ]
      										
	
    }
    class data {  
      FirstName! : string;  
      LastName! : string;  
      EmailAddress! : string;  
      CreatedDate! : string;  
      LastLoginDate! :  string;
      Status! :  string;
      Count! :  number;
      Actions! : string;
    }  

