import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-view-more',
  templateUrl: './dialog-view-more.component.html',
  styleUrls: ['./dialog-view-more.component.css']
})
export class DialogViewMoreComponent{

  /***
  *  atributos para controlar el dialog
   ***/
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<any>) {}

  /***
  *  atributo para validar el formulario
   ***/
  contactForm:FormGroup = new FormGroup({
    address: new FormControl(this.data.emergency.adress,Validators.required),
    date: new FormControl(this.data.emergency.date, Validators.required),
    id: new FormControl(this.data.emergency.id)
  });

  /***
  *  metodo que cierra el dialog si le doy al boton close
   ***/
  close() {
    this.dialogRef.close();
  }

  /***
  *  metodo que modifica el emergencia y cierra el dialog si le doy al boton save
   ***/
  save(){
    this.dialogRef.close(this.contactForm.value);
  }

}
