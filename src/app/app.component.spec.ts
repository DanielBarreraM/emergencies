import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {DialogDeleteComponent} from "./components/dialog-delete/dialog-delete.component";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {of} from "rxjs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import * as _ from "lodash";

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue:{close:()=> {} }},
        { provide: MAT_DIALOG_DATA, useValue: {
            emergency: {
              id:'4',
              adress: 'calle rere',
              date: new Date(2017, 4, 4, 17, 23, 42, 11).toDateString(),
              img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            }
          } }
      ],
    }).compileComponents();
  });

  it('should open dialog', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const openDialogSpy = spyOn(app, 'readEmergency');
    const emergency= {
        id:'4',
        adress: 'calle rere',
        date: new Date(2017, 4, 4, 17, 23, 42, 11).toDateString(),
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    }
    app.readEmergency(emergency)
    expect(openDialogSpy).toHaveBeenCalledWith(emergency);
  });

  it('should delete', () => {
    const fixture = TestBed.createComponent(DialogDeleteComponent);
    const dialog = fixture.componentInstance;

    let fixture2:ComponentFixture<AppComponent>=TestBed.createComponent(AppComponent);
    const app= fixture2.componentInstance;

    spyOn(app.dialog, 'open').and.returnValue({afterClosed:()=>of(dialog.data.emergency.id)} as MatDialogRef<any>);
    app.deleteEmergency(dialog.data.emergency);

    const i=_.findIndex(app.emergenciesMap,{id:dialog.data.emergency.id})

    expect(i==-1).toBeTruthy();
  });

});
