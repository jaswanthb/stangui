import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title"> Add New Profile</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
    <form action="">

    
                          <label for="inputtext" class="form-label"> profileName </label>
                          <input type="text" class="form-control" id="inputtext">
                        
<button type="button" class="btn btn-success"> Save</button>

    </form> 


    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
 

  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  ngOnInit(): void {
  }

  datatables : data[] = [

      
    { profileName : 'Basic Demographic Profile', Actions : ''},
    
    { profileName : 'Custom Profile', Actions : ''},

      ]
     
					 
    }
    class data {  
      profileName! : string;  
      Actions! : string;  
     
    }  

