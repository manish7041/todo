import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {


@Input() value:string = '';

@Output() 
popUpValue:EventEmitter<string> = new EventEmitter<string>

closePop(){
 this.value = ''
 console.log( this.value);
 this.popUpValue.emit('fasle');

}
 data:Object[]=[]
addTask(taskData:{title:string, description:string,type:string}){
 
 this.data.push(taskData)
 console.log(this.data);
 
}




}
