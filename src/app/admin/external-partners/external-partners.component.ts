import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-partners',
  templateUrl: './external-partners.component.html',
  styleUrls: ['./external-partners.component.css']
})
export class ExternalPartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options = [
    {id: 1, name: 'All'},
    {id: 2, name: 'two'},
    {id: 3, name: 'three'},
  ]
  selectedValue = 1
}
