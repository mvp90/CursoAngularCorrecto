import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  amigos: string[];
  constructor() {

    this.amigos=["Noelia", "Juanmi", "Jose Luis"];

  }

  ngOnInit() {
  }

}
