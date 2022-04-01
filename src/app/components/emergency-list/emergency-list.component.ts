import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Emergency } from 'src/app/models/emergency.model';
import {Film} from "../../models/film.model";

@Component({
  selector: 'app-emergency-list',
  templateUrl: './emergency-list.component.html',
  styleUrls: ['./emergency-list.component.css']
})

export class EmergencyListComponent{

  /***
  *  lista de emergencias
   ***/
  @Input() emergenciesMap:Emergency[]=[];
  @Input() top250films:Film[]=[];
  /***
  *  atributo que si esta en true ensenio un loading y se esta en false muestro las emergencias(si estan vacias muestro otro componente)
   ***/
  @Input() loading:boolean=true;

  /***
  *  emergencia que enviaremos cuando pulsemos el boton View more
   ***/
  @Output() onViewmore:EventEmitter<Emergency> = new EventEmitter();
  //@Output() onViewmore:EventEmitter<Film> = new EventEmitter();
  /***
  *  emergencia que enviaremos cuando pulsemos el boton delete
   ***/
  @Output() onDelete:EventEmitter<Emergency> = new EventEmitter();
  //@Output() onDelete:EventEmitter<Film> = new EventEmitter();

}
