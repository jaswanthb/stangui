import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datatables : data[] = [

    { landingName : 'Conversant Affiliate - Without routing', landingUrl : 'https://www.conversant.pro/registration?rid=%%referrer_id%%&sid=%%sub_referrer_code%%&txid=%%external_member_id%%'},
    
    { landingName : 'Opinionbar Affiliate - Without routing', landingUrl : 'https://www.opinionbar.com/e/s1?rid=%%referrer_id%%&sid=%%sub_referrer_code%%&txid=%%external_member_id%%'},
 
    
      ]
     
					 
				
    }
    class data {  
      landingName! : string;  
      landingUrl! : string;  
     
    }  

