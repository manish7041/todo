import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {



  nav =[
    {circle:"assets/icons8-filled-circle-48 (1).png", h:"work"},
    {circle:"assets/icons8-filled-circle-48 (2).png", h:"entertainment"},
    {circle:"assets/icons8-filled-circle-48 (3).png", h:"family"},
    {circle:"assets/icons8-filled-circle-48 (4).png", h:"study"}
  ]
}
