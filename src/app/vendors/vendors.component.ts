import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datatables : data[] = [

    { VendorName : '1 – Unclassified AI', VendorUrl : '	', EmailAddress : 'ppudhota@gmail.com',  IsEnabled : 'Yes', CreatedDate : '02-11-2019', Actions : 'click'},
    
    { VendorName : '1 Internal_Testing', VendorUrl : '	www.precisionsample.com', EmailAddress : 'Partha.pudhota@precisionsoftech.com',  IsEnabled : 'Yes', CreatedDate : '01/22/2015	', Actions : 'click'},
    
      ]
      	
      options = [
        {id: 1, name: 'All'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
      ]
      selectedValue = 1
      					 
				
    }
    class data {  
      VendorName! : string;  
      VendorUrl! : string;  
      EmailAddress! : string;  
      IsEnabled! : string;  
      CreatedDate! :  string;
      Actions! : string;
    }  

