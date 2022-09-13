import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {



  ngOnInit() {
    // this.router.navigate(["/"]);
  }



  closeResult = '';
  constructor(private modalService: NgbModal, private router: Router) {}
   
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true, size : 'xl' });
  }

  content = "";
  config = {
    // extraPlugins: "autogrow",
    // resize_enabled: false,
    // autoGrow_maxHeight: 200,
    // autoGrow_maxWidth: 200,
    // removePlugins: "resize"
  };  

  
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

    options = [
      {id: 1, name: 'Basic Demographic Profile'},
      {id: 2, name: 'Custom Profile'},
      {id: 3, name: 'Personal Profile'},
    ]
    selectedValue = 1

}
