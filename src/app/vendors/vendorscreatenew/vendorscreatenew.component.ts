import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorscreatenew',
  templateUrl: './vendorscreatenew.component.html',
  styleUrls: ['./vendorscreatenew.component.css']
})
export class VendorscreatenewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options = [
    {id: 1, name: 'All'},
    {id: 2, name: 'two'},
    {id: 3, name: 'three'},
  ]
  selectedValue = 2

  
}
