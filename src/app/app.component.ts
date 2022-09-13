import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs';
declare const $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'sampling-tool';
  
  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {  
  }

  showNav = false;
}

