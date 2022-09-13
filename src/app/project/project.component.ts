import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';

import {NgForm} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  

  ngOnInit(): void {
      
  }
  // showNav = true;

   
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
  
  datatables : data[] = [

    { Priority : 3,  Project : 226618, ProjectName : 'Ace Metrix_High Income w/ Auto Intender_May_13_600018633', Client : '	Ace Metrix', Status : 'open', Date : '15-2-2022', Invited : 0, Clicks : 500,Completes : 177,Terms : 100, OQs : 0, FieldIR : 0, BidIR : 10, MedianLOI : 20, Complete : 47, Actions : 'Clone'},
    
    { Priority : 11,  Project : 226051, ProjectName : 'Southern Maine', Client : '	OpinionRoute LLC', Status : 'open', Date : '5-12-2021', Invited : 68, Clicks : 2,Completes : 0,Terms : 0, OQs : 0, FieldIR : 0, BidIR : 100, MedianLOI : 0, Complete : 0, Actions : 'Clone'},
    
      ]
      
      
      options = [
        {id: 1, name: 'All'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
      ]
      selectedValue = 1
      
    }
    class data {  
      Priority! : number;  
      Project! : number;  
      ProjectName! : string;  
      Client! : string;  
      Status! :  string;
      Date! : string;
      Invited! : number;
      Clicks! : number;
      Completes! : number;
      Terms! : number;
      OQs! : number;
      FieldIR! : number;
      BidIR! : number;
      MedianLOI! : number;
      Complete! : number;
      Actions! : string;  
    }  