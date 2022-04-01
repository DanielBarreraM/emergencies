import {Component, OnInit} from '@angular/core';
import {Emergency} from "./models/emergency.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogViewMoreComponent} from "./components/dialog-view-more/dialog-view-more.component";
import {DialogDeleteComponent} from "./components/dialog-delete/dialog-delete.component";
import * as _ from 'lodash';
import {Top250Service} from "./services/top250.service";
import {Film} from "./models/film.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  top250films:Film[]=[];
  emergenciesMap:Emergency[]=[
    {
      id:'4',
      adress: 'calle gfhfghfghfghfghgf',
      date: new Date(2017, 4, 4, 17, 23, 42, 11).toDateString(),
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    }
  ];
  loading:boolean=true;

  constructor(public dialog:MatDialog, private top250:Top250Service) {

    this.top250.getCards().subscribe(films=> {
      this.top250films=films
      console.log(this.top250films)
      this.loading=false;
    });
  }

  /***
  *  atributo donde guardaremos la emergencia emitida del componente hijo
  ***/
  emergency?:Emergency;

  /***
  *  metodo para abrir un dialogComponent que le pasemos
   ***/
  private openDialog(dialog:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      emergency: this.emergency
    };
    return this.dialog.open(dialog, dialogConfig);//devolvemos el dialogRef que nos da el metodo open por si necesitamos capturar info del dialog
  }

  /***
  *  metodo que borra emergencia desde el dialog
  ***/
  deleteEmergency(emer:Emergency){
    this.emergency=emer;
    const dialogRef = this.openDialog(DialogDeleteComponent);
    dialogRef.afterClosed().subscribe(data => {
      _.remove(this.emergenciesMap, {id:data})
    });
  }

  /***
  *  metodo para modificar una emergencia
   ***/
  readEmergency(emer: Emergency){
    this.emergency=emer;
    const dialogRef =this.openDialog(DialogViewMoreComponent);
    dialogRef.afterClosed().subscribe(data => {
      if(data!=undefined){
        const i=_.findIndex(this.emergenciesMap,{id:data.id})
        if (i!=-1) {
          this.emergenciesMap[i].adress = data.address;
          this.emergenciesMap[i].date = data.date;
        }
      }
    });
  }

}
