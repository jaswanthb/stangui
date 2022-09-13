import { Component, VERSION} from '@angular/core';

import {NgForm} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-projectcreatenew',
  templateUrl: './projectcreatenew.component.html',
  styleUrls: ['./projectcreatenew.component.css']
})
export class ProjectcreatenewComponent  {

  public model = {
    name: 'Hardik',
    description: '<p> You are invited to participate in a new Vehicle Goods Study! Surveys often fill quickly so participate now to maximize your chance of qualifying. </p>'
  };

  selectedValue1 = 0;


  myFunction() {
    var myWindow = window.open("http://localhost:4200/project/projectcreatenew/testproject", "", "width=800,height=600");
  }

  content = "";
  config = {
    // extraPlugins: "autogrow",
    // resize_enabled: false,
    // autoGrow_maxHeight: 200,
    // autoGrow_maxWidth: 200,
    // removePlugins: "resize"
  };  

  closeResult = '';
  constructor(private modalService: NgbModal) {}
   
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true, size : 'xl' });
  }


  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

  



  ngOnInit(): void {
  }
  ckeditorContent: any;

  datatables : data[] = [

    { TargetName : 'Internal-Routed',  Available : 0, EAC : 0,SAC : 0,Invites : 0, Clicks : 19, Completes : 0, CUR : 0, QSF : 0, Terms : 0,  PSTerms : 2,  DF : 0,  OQ : 0,  PSOQ : 0,  Rejects : 0,  FC : 0,  RR : 0.00,  IR : 0,  ARR : 0,  DR : 89, Actions : 'click'},
    
    { TargetName : 'Projects-API',  Available : 0, EAC : 0,SAC : 0,Invites : 0, Clicks : 459, Completes : 55, CUR : 0, QSF : 240, Terms : 20,  PSTerms : 96,  DF : 1,  OQ : 0,  PSOQ : 0,  Rejects : 0,  FC : 0,  RR : 0.00,  IR : 73,  ARR : 0,  DR : 10, Actions : 'click'},
    
      ]
      datatables1 : data1[] = [

        { QuotaName : 'Internal-Routed',  FqId : '0', Quota : '0',Quota1 : '0',Active : '0', Accesses : 19, Completes : 0, Terms : 0, OQs : 0, BOQs : 0,  IR : 2,  DR : 0,  Actions : 'click',  Delete : 'click'},
        
          ]
      
      
      options = [
        {id: 1, name: 'All'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
      ]
      selectedValue = 1
      
   //dummy data
   selectedData = [
    { name: " Language", data : " English"}, 
    { name: " Country ",  data : " UNITED STATES OF AMERICA "},
    { name: " Gender",  data : "Male "},
    { name: "Age ",  data : "24"},
    { name: "Income ",  data : "this is data 5"},
    { name: "Next Vehicle Intenders ",  data : "this is data 6"},
 

   ];
      
    }
    class data {  
      TargetName! : string;  
      Available! : number;  
      EAC! :  number;
      SAC! : number;
      Invites! : number;
      Clicks! : number;
      Completes! : number;
      CUR! : number;
      QSF! : number;
      Terms! : number;
      PSTerms! : number;
      DF! : number;
      OQ! : number;
      PSOQ! : number;
      Rejects! : number;
      FC! : number;
      RR! : number;
      IR! : number;
      ARR! : number;
      DR! : number;
      Actions! : string;  
    }  
    class data1 {  
      QuotaName! : string;  
      FqId! : string;  
      Quota! :  string;
      Quota1! : string;
      Active! : string;
      Accesses! : number;
      Completes! : number;
      Terms! : number;
      OQs! : number;
      BOQs! : number;
      IR! : number;
      DR! : number;
      Actions! : string;  
      Delete! : string;
    }  
   