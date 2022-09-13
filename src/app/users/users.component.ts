import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  // showNav = true;

  ngOnInit(): void {
  }
  datatables : data[] = [

    { FirstName : 'Adam', LastName : 'Stephenson	', EmailAddress : 'adam@precisionsample.com',  CreatedDate : '01/03/2018', LastLoginDate:'May 28 2021 3:29PM', Status : 'Active',  Count : 3554 , Actions : 'click'},
    
    { FirstName : 'Amy', LastName : 'Held	', EmailAddress : 'amy@precisionsample.com',  CreatedDate : '06/21/2019',LastLoginDate:'May 28 2021 8:35AM', Status : 'Active',  Count : 671 , Actions : 'click'},
    
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