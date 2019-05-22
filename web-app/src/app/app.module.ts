import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserboardComponent } from './userboard/userboard.component';
import {MatCardModule, MatInputModule,MatButtonModule,MatRadioModule,MatTableModule,MatToolbarModule, MatTabsModule,MatCheckboxModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { ReportComponent } from './report/report.component';
import { MenuComponent } from './menu/menu.component';
import { AddMenuDialogComponent } from './add-menu-dialog/add-menu-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserboardComponent,
    AdminboardComponent,
    ReportComponent,
    MenuComponent,
    AddMenuDialogComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatTabsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
