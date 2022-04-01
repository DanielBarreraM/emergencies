import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {RouterTestingModule} from "@angular/router/testing";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DialogViewMoreComponent} from "./dialog-view-more.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {of} from "rxjs";
import {AppComponent} from "../../app.component";
import {DialogDeleteComponent} from "../dialog-delete/dialog-delete.component";

describe('DialogViewMoreComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewMoreComponent ],
      imports:[
        RouterTestingModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue:{ }},
        { provide: MAT_DIALOG_DATA, useValue: {
            emergency: {
              id:'4',
              adress: 'calle gfhfghfghfghfghgf',
              date: new Date(2017, 4, 4, 17, 23, 42, 11).toDateString(),
              img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            }
        } },
      ],
    })
      .compileComponents();
  });

  //test que confirma que el formulario se valida correctamente
  it('should valid', () => {
    const fixture = TestBed.createComponent(DialogViewMoreComponent);
    const component = fixture.componentInstance;
    component.contactForm.setValue({
      "address": "fg",
      "date": "jkhkujh",
      "id":component.data.emergency.id
    });
    expect(component.contactForm.valid).toEqual(true);
  });

  it('should valid', () => {
    const fixture = TestBed.createComponent(DialogViewMoreComponent);
    const component = fixture.componentInstance;
    component.contactForm.setValue({
      "address": "",
      "date": "",
      "id":component.data.emergency.id
    });
    expect(component.contactForm.valid).toEqual(false);
  });

  it('should close', () => {
    const fixture = TestBed.createComponent(DialogViewMoreComponent);
    const dialog = fixture.componentInstance;
    const closeDialog = spyOn(dialog, 'close');
    dialog.close();
    expect(closeDialog).toHaveBeenCalledWith();
  });

  /*it('should update',
    () => {
      const fixture = TestBed.createComponent(DialogViewMoreComponent);
      const dialog = fixture.componentInstance;

      let fixture2:ComponentFixture<AppComponent>=TestBed.createComponent(AppComponent);
      const app= fixture2.componentInstance;

      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.data = {
        emergency: dialog.data.emergency
      };
      dialog.dialogRef= app.dialog.open(DialogViewMoreComponent, dialogConfig)
      dialog.contactForm.setValue({
        "address": "fg",
        "date": "jkhkujh",
        "id":dialog.data.emergency.id
      });
      dialog.save()

      console.log(dialog.dialogRef.componentInstance.dialogRef._result.address!=dialog.data.emergency.adress
      && dialog.dialogRef.componentInstance.dialogRef._result.date!=dialog.data.emergency.date
      && dialog.dialogRef.componentInstance.dialogRef._result.id==dialog.data.emergency.id);

      expect(dialog.dialogRef.componentInstance.dialogRef._result != undefined).toBeTruthy();
    });*/

});
