import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "../../app.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Overlay, OverlayModule} from '@angular/cdk/overlay';
import {ComponentPortal} from "@angular/cdk/portal";

describe('DialogDeleteComponent', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteComponent, AppComponent ],
      imports:[
        RouterTestingModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {
            emergency: {
              id:'4',
              adress: 'calle rere',
              date: new Date(2017, 4, 4, 17, 23, 42, 11).toDateString(),
              img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            }
        } }
      ],
    })
      .compileComponents();
  });

  it('should close', () => {
    const fixture = TestBed.createComponent(DialogDeleteComponent);
    const dialog = fixture.componentInstance;
    const closeDialog = spyOn(dialog, 'close');
    dialog.close();
    expect(closeDialog).toHaveBeenCalledWith();
  });

  /*it('should send id', () => {
    const fixture = TestBed.createComponent(DialogDeleteComponent);
    const dialog = fixture.componentInstance;

    let fixture2:ComponentFixture<AppComponent>=TestBed.createComponent(AppComponent);
    const app= fixture2.componentInstance;

    dialog.dialogRef=app.dialog.open(DialogDeleteComponent,new MatDialogConfig());
    dialog.delete();
    expect(dialog.dialogRef.componentInstance.dialogRef._result==dialog.data.emergency.id).toBeTruthy();
  });*/

});
