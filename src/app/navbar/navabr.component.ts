import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrls: ['./navabr.component.css']
})
export class NavabrComponent  {

  constructor( public nav: NavbarServiceService ) {}


  // showNav = true;



}
