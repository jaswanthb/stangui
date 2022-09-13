import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  datatables : data[] = [

    { ClientName : '1 – Unclassified AI', ClientUrl : '	', EmailAddress : 'ppudhota@gmail.com',  IsEnabled : 'Yes', CreatedDate : '02-11-2019', Actions : 'click'},
    
    { ClientName : '1 Internal_Testing', ClientUrl : '	www.precisionsample.com', EmailAddress : 'Partha.pudhota@precisionsoftech.com',  IsEnabled : 'Yes', CreatedDate : '01/22/2015	', Actions : 'click'},
    
      ]
      	
      options = [
        {id: 1, name: 'All'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
      ]
      selectedValue = 1
      					 
				
    }
    class data {  
      ClientName! : string;  
      ClientUrl! : string;  
      EmailAddress! : string;  
      IsEnabled! : string;  
      CreatedDate! :  string;
      Actions! : string;
    }  
