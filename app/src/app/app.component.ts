import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  data:string= '';

  addpopValue(){
    this.data = 'true'

  }
  add(value:string){
    this.data = value;
  }
}
