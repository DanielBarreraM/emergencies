import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<any>) {}

  /***
  *  metodo que cierra el dialog si le doy al boton close
   ***/
  close() {
    this.dialogRef.close();
  }

  /***
  *  metodo que cierra el dialog y envia el id de la emergencia previamente seleccionada
   ***/
  delete(){
    this.dialogRef.close(this.data.emergency.id);
  }

}
