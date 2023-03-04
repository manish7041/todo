import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks = [
    {title:"Fetch Water", menu:"assets/icons8-ellipsis-50.png", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, rerum! Provident rerum velit reiciendis, architecto nesciunt minima. Amet, dolor nam.", type:"assets/icons8-filled-circle-48.png",checkbox:true},

    {title:"Fetch Water", menu:"assets/icons8-ellipsis-50.png", description:"Lorem ipsum, dolor sit amet consectetur adipisicin", type:"assets/icons8-filled-circle-48.png",checkbox:true},

    
    {title:"Fetch Water", menu:"assets/icons8-ellipsis-50.png", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.", type:"assets/icons8-filled-circle-48.png",checkbox:true},

    {title:"Fetch Water", menu:"assets/icons8-ellipsis-50.png", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, rerum! Provident rerum velit reiciendis, architecto nesciunt minima. Amet, dolor nam.", type:"assets/icons8-filled-circle-48.png",checkbox:true},

  ]
}
