import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientcreatenew',
  templateUrl: './clientcreatenew.component.html',
  styleUrls: ['./clientcreatenew.component.css']
})
export class ClientcreatenewComponent implements OnInit {

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
